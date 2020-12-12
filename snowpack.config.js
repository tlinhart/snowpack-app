// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  // mount: {},
  // plugins: [],
  // installOptions: {},
  // devOptions: {},
  // buildOptions: {},
  "experiments": {
    "optimize": {
      "bundle": true,
      "minify": true,
      "target": 'es2018'
    }
  }
};
