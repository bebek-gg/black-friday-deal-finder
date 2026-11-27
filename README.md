# Bargain Beacon — Black Friday Deal Finder

[![Black Friday Deal Finder](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01)
[![Rank](https://make.fun/badge/black-friday-deal-finder-01/bebek-gg/black-friday-deal-finder/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01)
[![Reward](https://make.fun/badge/black-friday-deal-finder-01/bebek-gg/black-friday-deal-finder/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01)

A static deal-finder site of real Black Friday and Cyber Monday deals,
checked by hand on 27 Nov 2026. 26 deals at Amazon, Best Buy and Walmart,
each with its product, store, store link, sale price, usual price,
discount, check time and source — plus an honest verdict (NEW LOW,
STRONG PRICE, ROUTINE SALE or INFLATED) with the evidence behind it.

## What it does

- Search by product or store
- Filter by category, store and minimum discount (20%+, 40%+, 50%+)
- Sort by best verdict, biggest discount, lowest price or biggest saving
- A detail page per deal (`#/deal/<id>`) with the verdict evidence and
  the same product's price at other stores, where verified
- Phone layout at 390px

## How the deals were checked

Every price was read on 27 Nov 2026 at the store's own product page or
in a deals source naming the store (Slickdeals, DealNews, Gizmodo,
Pickoryx, 9to5Google and others). Discounts are computed from the two
prices shown, so they always add up. Two prices that could not be
verified were left out entirely.

On 27 Nov the prices were matched again against live sources: the Xbox
Wireless Controller Ice Breaker Edition had been listed at $49, but that
Amazon price had ended (live price $64.99, the average price — no deal),
so the deal was removed. The REOLINK Duo 3 PoE was corrected to $137.99
and the MacBook Air M5 to $999.99, the exact live prices.

## Run it

Serve `app/` with any static server and open `index.html`:

```sh
cd app && python3 -m http.server 8080
```

No build step, no network requests: the site is plain HTML, CSS and
JavaScript, system fonts only, with its own inline SVG icons.

## Hand-in

`main.ts` (Node 22, standard library only) copies `app/` and
`screenshots/` to the output directory and writes `dossier.json` with
the vendored `vendor/makefun-frontend.ts` library.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Entry for the [Black Friday deal finder bounty](https://make.fun/bounty/black-friday-deal-finder-01) on make.fun.
