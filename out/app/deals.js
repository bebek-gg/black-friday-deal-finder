// Bargain Beacon deal data.
// Every price below was read on 27 Nov 2026 at the named store or in a
// deals source naming that store. The discount is never stored: the
// site computes it from the two prices, so it always adds up.
// verdict: NEW LOW | STRONG PRICE | ROUTINE SALE | INFLATED
// evidence: the fact behind the verdict, shown on the deal page.
// compare: the same product's price at another store, where verified.

export const CHECKED_DAY = "27 Nov 2026";

export const DEALS = [
  {
    id: "airpods-pro-3",
    product: "Apple AirPods Pro 3",
    store: "Amazon",
    category: "Audio",
    sale: 149,
    usual: 249,
    url: "https://www.amazon.com/dp/B0FQFB8FMG",
    source: "Gizmodo deals",
    sourceUrl: "",
    verdict: "NEW LOW",
    evidence: "Lowest price seen for AirPods Pro 3: $100 under list, and a dollar under Target's $150.",
    compare: [
      { store: "Target", price: 150 },
      { store: "Walmart", price: 149 },
      { store: "Costco", price: 150, note: "includes 2 years AppleCare+" }
    ]
  },
  {
    id: "macbook-air-m5",
    product: "Apple MacBook Air 13-inch, M5, 16GB / 512GB",
    store: "Amazon",
    category: "Laptops",
    sale: 999,
    usual: 1299,
    url: "https://www.amazon.com/dp/B0GR1493ZV",
    source: "Pickoryx Amazon price check",
    sourceUrl: "https://pickoryx.com/deals/apple-2026-macbook-air-13-inch-laptop-with-m5-chip-built-2-B0GR1493ZV",
    verdict: "NEW LOW",
    evidence: "Lowest price tracked for the 16GB / 512GB M5 Air; $50 under Best Buy's $1,049.",
    compare: [{ store: "Best Buy", price: 1049 }]
  },
  {
    id: "sony-xm6",
    product: "Sony WH-1000XM6 Noise Cancelling Headphones",
    store: "Amazon",
    category: "Audio",
    sale: 348,
    usual: 459.99,
    url: "https://www.amazon.com/dp/B0F3PQHWTZ",
    source: "Gizmodo deals",
    sourceUrl: "",
    verdict: "STRONG PRICE",
    evidence: "Lowest price Amazon has charged for the XM6; $30 under its Prime Day price.",
    compare: []
  },
  {
    id: "beats-solo-4",
    product: "Beats Solo 4 On-Ear Wireless Headphones",
    store: "Amazon",
    category: "Audio",
    sale: 99.95,
    usual: 199.95,
    url: "https://www.amazon.com/dp/B0DDQLGDY3",
    source: "TechDeals",
    sourceUrl: "",
    verdict: "STRONG PRICE",
    evidence: "Half price, and within $3 of its Prime Day low of $97.",
    compare: []
  },
  {
    id: "bose-qc-2nd-gen",
    product: "Bose QuietComfort Headphones (2nd Gen), Black",
    store: "Amazon",
    category: "Audio",
    sale: 219,
    usual: 359,
    url: "https://www.amazon.com/dp/B0GXW9C8QC",
    source: "Pickoryx Amazon price check",
    sourceUrl: "https://pickoryx.com/deals/bose-quietcomfort-headphones-2nd-gen-wireless-headphones-B0GXW9C8QC",
    verdict: "NEW LOW",
    evidence: "Lowest recorded price for the 2nd-gen QuietComfort, per Digital Trends.",
    compare: []
  },
  {
    id: "fire-tv-stick-4k-plus",
    product: "Amazon Fire TV Stick 4K Plus",
    store: "Amazon",
    category: "Streaming",
    sale: 29.99,
    usual: 69.99,
    url: "https://www.amazon.com/dp/B0FLJJX1QV",
    source: "Gizmodo deals",
    sourceUrl: "",
    verdict: "ROUTINE SALE",
    evidence: "Amazon raised this stick's list price to $69.99 earlier in 2026 (from $49.99), so the 57% headline overstates the saving. $29.99 is still a fair price.",
    compare: []
  },
  {
    id: "kindle-paperwhite",
    product: "Amazon Kindle Paperwhite 16GB (2024)",
    store: "Amazon",
    category: "E-Readers",
    sale: 129.99,
    usual: 199.99,
    url: "https://www.amazon.com/dp/B0BDCMBKB4",
    source: "ScreenRant",
    sourceUrl: "",
    verdict: "STRONG PRICE",
    evidence: "35% off list, confirmed by three deal trackers on 25-26 Nov.",
    compare: []
  },
  {
    id: "kindle-colorsoft",
    product: "Amazon Kindle Colorsoft 16GB (2024)",
    store: "Amazon",
    category: "E-Readers",
    sale: 169.99,
    usual: 289.99,
    url: "https://www.amazon.com/dp/B0CGVSKR1G",
    source: "Abt",
    sourceUrl: "https://www.abt.com/Amazon-Kindle-Colorsoft-2024-7-Inch-16GB-Color-Display-Without-Lockscreen-Ads-in-Black-B0CGVSKR1G/p/253414.html",
    verdict: "STRONG PRICE",
    evidence: "41% off; Abt lists the same $169.99 against a $289.99 comparable value.",
    compare: []
  },
  {
    id: "echo-spot",
    product: "Amazon Echo Spot (2024)",
    store: "Amazon",
    category: "Smart Home",
    sale: 44.99,
    usual: 109.99,
    url: "https://www.amazon.com/dp/B0BFC7WQ6R",
    source: "Gizmodo deals",
    sourceUrl: "",
    verdict: "STRONG PRICE",
    evidence: "59% off the $109.99 list price, confirmed across three deal sources on 26 Nov.",
    compare: []
  },
  {
    id: "airtag-1-pack",
    product: "Apple AirTag (2nd Generation), 1-pack",
    store: "Amazon",
    category: "Smart Home",
    sale: 18,
    usual: 29,
    url: "https://www.amazon.com/dp/B0GJTFXNRX",
    source: "Slickdeals",
    sourceUrl: "",
    verdict: "NEW LOW",
    evidence: "All-time low for the 2nd-gen AirTag; Slickdeals flagged $18 as the lowest AirTag price yet.",
    compare: [
      { store: "Walmart", price: 18 },
      { store: "Best Buy", price: 23 }
    ]
  },
  {
    id: "airtag-4-pack",
    product: "Apple AirTag (2nd Generation), 4-pack",
    store: "Amazon",
    category: "Smart Home",
    sale: 79,
    usual: 99,
    url: "https://www.amazon.com/dp/B0GJTXVN9Z",
    source: "Pickoryx Amazon price check",
    sourceUrl: "",
    verdict: "STRONG PRICE",
    evidence: "20% off list — but Walmart lists the same 4-pack at $69.99, $9 cheaper.",
    compare: [{ store: "Walmart", price: 69.99 }]
  },
  {
    id: "roborock-saros-20",
    product: "Roborock Saros 20 Robot Vacuum and Mop",
    store: "Amazon",
    category: "Home Cleaning",
    sale: 989.99,
    usual: 1599.99,
    url: "https://www.amazon.com/dp/B0G64MM1HM",
    source: "Gizmodo deals",
    sourceUrl: "",
    verdict: "NEW LOW",
    evidence: "Record low for Roborock's flagship robot vacuum, per Mashable's Black Friday roundup.",
    compare: []
  },
  {
    id: "hisense-u7",
    product: "Hisense 65-inch U7 Mini-LED ULED 4K TV (65U7SG)",
    store: "Amazon",
    category: "TVs",
    sale: 797.99,
    usual: 1497.99,
    url: "https://www.amazon.com/dp/B0GR9BLPJ8",
    source: "TechDeals",
    sourceUrl: "",
    verdict: "NEW LOW",
    evidence: "Lowest price tracked for the 65U7SG; $700 under its $1,497.99 list.",
    compare: []
  },
  {
    id: "dualsense-edge",
    product: "PlayStation DualSense Edge Wireless Controller",
    store: "Amazon",
    category: "Gaming",
    sale: 169,
    usual: 199,
    url: "https://www.amazon.com/dp/B0BSYFB99D",
    source: "DealNews",
    sourceUrl: "",
    verdict: "ROUTINE SALE",
    evidence: "Only 15% off list; the standard DualSense controller is 27% off at Best Buy.",
    compare: []
  },
  {
    id: "lego-r2d2",
    product: "LEGO Star Wars R2-D2 Building Set 75379",
    store: "Amazon",
    category: "Toys",
    sale: 79.99,
    usual: 99.99,
    url: "https://www.amazon.com/dp/B0CGY22J6Y",
    source: "DealNews",
    sourceUrl: "",
    verdict: "NEW LOW",
    evidence: "All-time low for set 75379, per DealNews (verified 26 Nov).",
    compare: []
  },
  {
    id: "tcl-s4cf-65",
    product: "TCL 65-inch S4CF Series 4K UHD HDR Smart TV with Fire TV",
    store: "Best Buy",
    category: "TVs",
    sale: 229.99,
    usual: 469.99,
    url: "https://www.bestbuy.com/product/sku/6687112",
    source: "Best Buy product page",
    sourceUrl: "https://www.bestbuy.com/product/sku/6687112",
    verdict: "STRONG PRICE",
    evidence: "$240 under Best Buy's $469.99 comparable value — a reference price, not a tracked street price.",
    compare: []
  },
  {
    id: "sony-xm5",
    product: "Sony WH-1000XM5 Noise Cancelling Headphones, Black",
    store: "Best Buy",
    category: "Audio",
    sale: 169.99,
    usual: 398,
    url: "https://www.bestbuy.com/product/sony-wh-1000xm5-wireless-noise-cancelling-over-the-ear-headphones-black/J7XSRH5CXG",
    source: "HotHardware",
    sourceUrl: "https://hothardware.com/news/best-buy-doorbuster-deals-slash-sony-wh-1000xm5-all-time-low",
    verdict: "NEW LOW",
    evidence: "All-time low for the XM5; Best Buy's doorbuster, $228 under its $398 comparable value.",
    compare: []
  },
  {
    id: "hp-omnibook-5",
    product: "HP OmniBook 5 14-inch 2K OLED Touchscreen Laptop",
    store: "Best Buy",
    category: "Laptops",
    sale: 449.99,
    usual: 799.99,
    url: "https://www.bestbuy.com/product/hp-omnibook-5-14-2k-oled-touchscreen-laptop-intel-core-5-series-3-2026-8gb-memory-256gb-ssd-starlit-blue/J3KSW748W6",
    source: "Best Buy product page",
    sourceUrl: "https://www.bestbuy.com/product/hp-omnibook-5-14-2k-oled-touchscreen-laptop-intel-core-5-series-3-2026-8gb-memory-256gb-ssd-starlit-blue/J3KSW748W6",
    verdict: "STRONG PRICE",
    evidence: "44% off; a 2K OLED touchscreen laptop for $449.99, $350 under its $799.99 list.",
    compare: []
  },
  {
    id: "insignia-f40-40",
    product: "Insignia 40-inch F40 Series LED Full HD Smart Fire TV",
    store: "Best Buy",
    category: "TVs",
    sale: 84.98,
    usual: 149.99,
    url: "https://www.bestbuy.com/product/insignia-40-class-f40-series-led-full-hd-1080p-smart-fire-tv/J2FPJK67CQ/sku/6614066",
    source: "Slickdeals",
    sourceUrl: "https://slickdeals.net/f/20313480-insignia-40-class-f40-series-led-full-hd-1080p-smart-fire-tv-free-shipping-90-at-best-buyat",
    verdict: "STRONG PRICE",
    evidence: "43% off Best Buy's $149.99 comparable value; the same set was $89.99 on 15 Nov and $84.98 now.",
    compare: []
  },
  {
    id: "switch-2-mario-kart",
    product: "Nintendo Switch 2 + Mario Kart World Bundle",
    store: "Best Buy",
    category: "Gaming",
    sale: 499.99,
    usual: 549.99,
    url: "https://www.bestbuy.com/product/switch-2-mario-kart-world-bundle/J7GSL57WWG",
    source: "Slickdeals",
    sourceUrl: "https://slickdeals.net/sh/thread-20367423/e/3/c/deal-details/au/e7f27faae6e911f1abba861853a10ad5/",
    verdict: "STRONG PRICE",
    evidence: "Console-only price for console + Mario Kart World + 3 months online ($87.98 of extras).",
    compare: [
      { store: "Amazon", price: 499.99 },
      { store: "Walmart", price: 499 },
      { store: "Target", price: 500 }
    ]
  },
  {
    id: "dualsense",
    product: "PlayStation DualSense Wireless Controller, White",
    store: "Best Buy",
    category: "Gaming",
    sale: 54.99,
    usual: 74.99,
    url: "https://www.bestbuy.com/product/sony-playstation-5-dualsense-wireless-controller-white/6430163",
    source: "Best Buy product page",
    sourceUrl: "https://www.bestbuy.com/product/sony-playstation-5-dualsense-wireless-controller-white/6430163",
    verdict: "NEW LOW",
    evidence: "All-time low for the standard DualSense, per DealNews.",
    compare: [{ store: "Amazon", price: 54 }]
  },
  {
    id: "airpods-4",
    product: "Apple AirPods 4",
    store: "Walmart",
    category: "Audio",
    sale: 89,
    usual: 129.99,
    url: "https://www.walmart.com/ip/Apple-AirPods-4/11381374703",
    source: "DealNews",
    sourceUrl: "https://www.dealnews.com/c142/Electronics/s321/Walmart/b13/Apple/t1/Deals/",
    verdict: "STRONG PRICE",
    evidence: "$89 at Walmart — $10 under its $99 flyer price and $41 under list.",
    compare: []
  },
  {
    id: "lego-animal-crossing",
    product: "LEGO Animal Crossing Creative Houses: Seasons of Fun 77057",
    store: "Amazon",
    category: "Toys",
    sale: 77,
    usual: 89.99,
    url: "https://www.amazon.com/dp/B0DRW4RCV5",
    source: "Pickoryx Amazon price check",
    sourceUrl: "https://pickoryx.com/deals/lego-animal-crossing-creative-houses-seasons-of-fun-77057-B0DRW4RCV5",
    verdict: "ROUTINE SALE",
    evidence: "A $43.99 Lightning Deal expired on 20 Nov; at $77 this is only 14% off list.",
    compare: []
  },
  {
    id: "xbox-ice-breaker",
    product: "Microsoft Xbox Wireless Controller, Ice Breaker Edition",
    store: "Amazon",
    category: "Gaming",
    sale: 49,
    usual: 79.99,
    url: "https://www.amazon.com/dp/B0FLLXHPM9",
    source: "Slickdeals",
    sourceUrl: "https://slickdeals.net/sh/thread-20353212/e/3/c/deal-details/au/0071faa0e78111f1b221161ca257c495/",
    verdict: "STRONG PRICE",
    evidence: "39% off; $49 at Amazon since 19 Nov per Slickdeals and 9to5Toys.",
    compare: []
  },
  {
    id: "dji-osmo-action-4",
    product: "DJI Osmo Action 4 Essential Combo",
    store: "Amazon",
    category: "Cameras",
    sale: 169,
    usual: 239,
    url: "https://www.amazon.com/dp/B0DS2B3P2B",
    source: "DealsSpy",
    sourceUrl: "https://www.dealsspy.com/deals/dji-osmoaction4-essential-combo-waterproof-actioncamera-rMF5wLe",
    verdict: "STRONG PRICE",
    evidence: "29% off; $20 cheaper than the $189 price earlier in November.",
    compare: []
  },
  {
    id: "reolink-duo-3-poe",
    product: "REOLINK Duo 3 PoE 16MP Dual-Lens Security Camera",
    store: "Amazon",
    category: "Smart Home",
    sale: 137,
    usual: 229.99,
    url: "https://www.amazon.com/dp/B0CM39K7CB",
    source: "Gizmodo",
    sourceUrl: "https://www.facebook.com/gizmodo/posts/pfbid028jCYuFy9aqJeA1SdXp84pgc4USsyiiow9vCJr5mHjZPzS73N4RY6rY6KcuHgWM9dl",
    verdict: "STRONG PRICE",
    evidence: "40% off per Gizmodo's 20 and 23 Nov price checks ($138, then $137).",
    compare: []
  },
  {
    id: "roborock-f25-steam",
    product: "Roborock F25 Steam Wet Dry Vacuum Mop",
    store: "Amazon",
    category: "Home Cleaning",
    sale: 349.99,
    usual: 599.99,
    url: "https://www.amazon.com/dp/B0GT4MFVFQ",
    source: "9to5Google",
    sourceUrl: "https://9to5google.com/2026/11/19/roborocks-black-friday-deals-save-over-1650-on-select-robot-vacuums/",
    verdict: "STRONG PRICE",
    evidence: "42% off; 9to5Google and NY Post both list $349.99 as live through 30 Nov.",
    compare: []
  }
];

export const CATEGORIES = [
  "Audio",
  "Laptops",
  "TVs",
  "Smart Home",
  "Gaming",
  "E-Readers",
  "Streaming",
  "Home Cleaning",
  "Toys",
  "Cameras"
];

export const STORES = ["Amazon", "Best Buy", "Walmart"];

// Verdict order for "best verdict first" sorting.
export const VERDICT_RANK = {
  "NEW LOW": 0,
  "STRONG PRICE": 1,
  "ROUTINE SALE": 2,
  "INFLATED": 3
};
