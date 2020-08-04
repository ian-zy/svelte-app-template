const isDev = process.env.NODE_ENV === "development";

module.exports = {
  extends: "@snowpack/app-scripts-svelte",
  scripts: {
    "run:tsc": "tsc --noEmit",
    "run:tsc::watch": "$1 --watch",
  },
  plugins: [
    ["@snowpack/plugin-webpack", {
      sourceMap: true
    }]
  ],
  installOptions: {
    rollup: {
      plugins: [require("rollup-plugin-svelte")({
        dev: isDev
      })],
    },
  },
};
