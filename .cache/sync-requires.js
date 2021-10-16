const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/evanmitchell/Desktop/webdev/Portfolio/etmitchell2022.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/evanmitchell/Desktop/webdev/Portfolio/etmitchell2022.github.io/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/evanmitchell/Desktop/webdev/Portfolio/etmitchell2022.github.io/src/pages/index.js"))),
  "component---src-pages-regalia-js": hot(preferDefault(require("/Users/evanmitchell/Desktop/webdev/Portfolio/etmitchell2022.github.io/src/pages/regalia.js"))),
  "component---src-pages-stocks-js": hot(preferDefault(require("/Users/evanmitchell/Desktop/webdev/Portfolio/etmitchell2022.github.io/src/pages/stocks.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/evanmitchell/Desktop/webdev/Portfolio/etmitchell2022.github.io/src/pages/using-typescript.tsx"))),
  "component---src-pages-weather-js": hot(preferDefault(require("/Users/evanmitchell/Desktop/webdev/Portfolio/etmitchell2022.github.io/src/pages/weather.js")))
}

