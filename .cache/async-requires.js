// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-regalia-js": () => import("./../../../src/pages/regalia.js" /* webpackChunkName: "component---src-pages-regalia-js" */),
  "component---src-pages-stocks-js": () => import("./../../../src/pages/stocks.js" /* webpackChunkName: "component---src-pages-stocks-js" */),
  "component---src-pages-using-typescript-tsx": () => import("./../../../src/pages/using-typescript.tsx" /* webpackChunkName: "component---src-pages-using-typescript-tsx" */),
  "component---src-pages-weather-js": () => import("./../../../src/pages/weather.js" /* webpackChunkName: "component---src-pages-weather-js" */)
}

