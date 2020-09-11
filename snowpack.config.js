module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    ["./my-svelte-plugin.js"],
    "@snowpack/plugin-dotenv",
    [
      "@snowpack/plugin-run-script",
      {
        cmd: "tsc --noEmit",
        watch: "$1 --watch",
      },
    ],
    ["@snowpack/plugin-run-script", { cmd: "svelte-check" }],
    [
      "@snowpack/plugin-webpack",
      {
        extendConfig: (config) => {
          // This enables dynamic import to be splitted into its own bundle
          config.optimization.splitChunks.cacheGroups.commons.chunks =
            "initial";
          return config;
        },
      },
    ],
  ],
  installOptions: {
    installTypes: true,
  },
};
