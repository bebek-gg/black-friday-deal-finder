// Bargain Beacon — deal finder logic.
// Renders the deal grid and the deal detail page, and wires up search,
// category / store / discount filters and sorting. Routes on the hash:
// #/ for the grid, #/deal/<id> for one deal. Query parameters preset the
// controls (?q=&cat=&store=&min=&sort=) so a filtered view is linkable.

import { DEALS, CHECKED_DAY, CATEGORIES, STORES, VERDICT_RANK } from "./deals.js";
import { iconFor } from "./icons.js";

const gridEl = document.getElementById("grid");
const detailEl = document.getElementById("detail");
const countEl = document.getElementById("count-line");
const searchEl = document.getElementById("search");
const categoryEl = document.getElementById("category");
const storeEl = document.getElementById("store");
const discountEl = document.getElementById("min-discount");
const sortEl = document.getElementById("sort");
const emptyEl = document.getElementById("empty");

const state = {
  q: "",
  category: "All",
  store: "All",
  minDiscount: 0,
  sort: "verdict"
};

// money formats a number as a US dollar price, e.g. 1299 -> $1,299.
export function money(n) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

// discountOf computes the discount from the two prices, rounded to a
// whole percent, so the shown percent always matches the prices.
export function discountOf(deal) {
  return Math.round(((deal.usual - deal.sale) / deal.usual) * 100);
}

// savedOf returns the dollars saved on a deal.
export function savedOf(deal) {
  return Math.round((deal.usual - deal.sale) * 100) / 100;
}

// verdictClass maps a verdict to its badge colour class.
export function verdictClass(verdict) {
  return "verdict-" + verdict.toLowerCase().replace(/ /g, "-");
}

// fillSelects populates the category and store dropdowns from the data.
function fillSelects() {
  for (const c of CATEGORIES) {
    const o = document.createElement("option");
    o.value = c;
    o.textContent = c;
    categoryEl.appendChild(o);
  }
  for (const s of STORES) {
    const o = document.createElement("option");
    o.value = s;
    o.textContent = s;
    storeEl.appendChild(o);
  }
}

// applyQueryParams reads ?q=&cat=&store=&min=&sort= so a filtered view
// can be opened (and screenshotted) from a plain link.
function applyQueryParams() {
  const p = new URLSearchParams(window.location.search);
  const q = p.get("q");
  if (q) {
    state.q = q;
    searchEl.value = q;
  }
  const cat = p.get("cat");
  if (cat && (cat === "All" || CATEGORIES.includes(cat))) {
    state.category = cat;
    categoryEl.value = cat;
  }
  const store = p.get("store");
  if (store && (store === "All" || STORES.includes(store))) {
    state.store = store;
    storeEl.value = store;
  }
  const min = Number(p.get("min"));
  if ([0, 20, 40, 50].includes(min)) {
    state.minDiscount = min;
    discountEl.value = String(min);
  }
  const sort = p.get("sort");
  if (["verdict", "discount", "price", "saving"].includes(sort)) {
    state.sort = sort;
    sortEl.value = sort;
  }
}

// filteredDeals applies the search text and the three filters, then the
// chosen sort, and returns the deals to show.
export function filteredDeals() {
  const q = state.q.trim().toLowerCase();
  let list = DEALS.filter((d) => {
    if (q && !(d.product.toLowerCase().includes(q) || d.store.toLowerCase().includes(q))) return false;
    if (state.category !== "All" && d.category !== state.category) return false;
    if (state.store !== "All" && d.store !== state.store) return false;
    if (discountOf(d) < state.minDiscount) return false;
    return true;
  });
  const by = {
    verdict: (a, b) => VERDICT_RANK[a.verdict] - VERDICT_RANK[b.verdict] || discountOf(b) - discountOf(a),
    discount: (a, b) => discountOf(b) - discountOf(a),
    price: (a, b) => a.sale - b.sale,
    saving: (a, b) => savedOf(b) - savedOf(a)
  };
  return list.sort(by[state.sort]);
}

// cardHtml builds one deal card. The store link is a plain <a href> to
// the product page; the card itself links to the detail hash route.
function cardHtml(deal) {
  const pct = discountOf(deal);
  return `<article class="card">
    <div class="card-top">
      <span class="card-icon">${iconFor(deal.category)}</span>
      <span class="card-category">${deal.category}</span>
      <span class="badge ${verdictClass(deal.verdict)}">${deal.verdict}</span>
    </div>
    <h3 class="card-name"><a href="#/deal/${deal.id}">${deal.product}</a></h3>
    <p class="card-store">${deal.store}</p>
    <p class="card-prices">
      <span class="sale">${money(deal.sale)}</span>
      <span class="usual">${money(deal.usual)}</span>
      <span class="pct">-${pct}%</span>
    </p>
    <p class="card-save">Save ${money(savedOf(deal))}</p>
    <p class="card-checked">Checked ${CHECKED_DAY} &middot; ${deal.source}</p>
    <p class="card-links">
      <a class="btn" href="${deal.url}" target="_blank" rel="noopener">Buy at ${deal.store} &nearr;</a>
      <a class="btn btn-ghost" href="#/deal/${deal.id}">Details</a>
    </p>
  </article>`;
}

// renderGrid draws the filtered deal grid and the counts line.
export function renderGrid() {
  const list = filteredDeals();
  gridEl.innerHTML = list.map(cardHtml).join("");
  countEl.textContent = `${DEALS.length} verified deals · checked ${CHECKED_DAY} · showing ${list.length}`;
  emptyEl.hidden = list.length !== 0;
  gridEl.hidden = false;
  detailEl.hidden = true;
  detailEl.innerHTML = "";
}

// compareHtml builds the cross-store comparison table for a deal.
function compareHtml(deal) {
  if (!deal.compare.length) return "";
  const rows = deal.compare
    .map((c) => `<tr><td>${c.store}</td><td>${money(c.price)}</td><td>${c.note || ""}</td></tr>`)
    .join("");
  return `<section class="compare">
    <h2>Same product elsewhere</h2>
    <table>
      <thead><tr><th>Store</th><th>Price</th><th></th></tr></thead>
      <tbody>
        <tr class="this-store"><td>${deal.store} (this deal)</td><td>${money(deal.sale)}</td><td></td></tr>
        ${rows}
      </tbody>
    </table>
  </section>`;
}

// renderDetail draws one deal's full page on the #/deal/<id> route.
export function renderDetail(id) {
  const deal = DEALS.find((d) => d.id === id);
  if (!deal) {
    window.location.hash = "#/";
    return;
  }
  const pct = discountOf(deal);
  const sourceLink = deal.sourceUrl
    ? ` &middot; <a href="${deal.sourceUrl}" target="_blank" rel="noopener">Read the source</a>`
    : "";
  detailEl.innerHTML = `<article class="detail">
    <p class="detail-back"><a href="#/">&larr; All deals</a></p>
    <div class="detail-head">
      <span class="card-icon big">${iconFor(deal.category)}</span>
      <div>
        <p class="card-category">${deal.category} &middot; ${deal.store}</p>
        <h2>${deal.product}</h2>
        <span class="badge ${verdictClass(deal.verdict)}">${deal.verdict}</span>
      </div>
    </div>
    <p class="detail-prices">
      <span class="sale big">${money(deal.sale)}</span>
      <span class="usual big">${money(deal.usual)}</span>
      <span class="pct big">-${pct}%</span>
      <span class="save">Save ${money(savedOf(deal))}</span>
    </p>
    <section class="verdict-box">
      <h2>Is it really a deal?</h2>
      <p>${deal.evidence}</p>
    </section>
    ${compareHtml(deal)}
    <p class="detail-checked">Price checked ${CHECKED_DAY} at ${deal.store} &middot; Source: ${deal.source}${sourceLink}</p>
    <p class="detail-links">
      <a class="btn" href="${deal.url}" target="_blank" rel="noopener">Buy at ${deal.store} &nearr;</a>
      <a class="btn btn-ghost" href="#/">Back to all deals</a>
    </p>
  </article>`;
  gridEl.hidden = true;
  detailEl.hidden = false;
  window.scrollTo(0, 0);
}

// route reads the hash and shows the grid or one deal's page.
export function route() {
  const hash = window.location.hash || "#/";
  const m = hash.match(/^#\/deal\/([\w-]+)$/);
  if (m) renderDetail(m[1]);
  else renderGrid();
}

searchEl.addEventListener("input", () => {
  state.q = searchEl.value;
  renderGrid();
});
categoryEl.addEventListener("change", () => {
  state.category = categoryEl.value;
  renderGrid();
});
storeEl.addEventListener("change", () => {
  state.store = storeEl.value;
  renderGrid();
});
discountEl.addEventListener("change", () => {
  state.minDiscount = Number(discountEl.value);
  renderGrid();
});
sortEl.addEventListener("change", () => {
  state.sort = sortEl.value;
  renderGrid();
});
window.addEventListener("hashchange", route);

fillSelects();
applyQueryParams();
route();
