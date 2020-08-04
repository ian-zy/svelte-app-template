const isDev = process.env.NODE_ENV === "development";

module.exports = {
  purge: {
    enabled: !isDev,
    content: ["./src/**/*.svelte"],
  },
  theme: {
    colors: {
      white: "#ffffff",
      "gray-lightest": "#f8f9fa",
      "gray-lighter": "#e5e5e6",
      "gray-light": "#d1d1d2",
      gray: "#bebec0",
      "gray-dark": "#979798",
      "gray-darker": "#6f6f70",
      "gray-darkest": "#48494a",
      black: "#212122",

      "brand-light": "#d7e0ff",
      brand: "#0389ff",
      "brand-dark": "#214377",

      "cta-light": "#ffcfc0",
      cta: "#ff030b",
      "cta-dark": "#7a1b0f",

      "info-light": "#daf2ff",
      info: "#35ccff",
      "info-dark": "#296177",

      "warning-light": "#fdf1d7",
      warning: "#eaca5e",
      "warning-dark": "#6f6031",

      "success-light": "#daf7dc",
      success: "#54d974",
      "success-dark": "#30673b",

      "danger-light": "#ffd5d7",
      danger: "#ec4e68",
      "danger-dark": "#702c35",
    },
  },
  variants: {},
  plugins: [
    require("tailwindcss-elevation")(["responsive", "hover", "disabled"]),
  ],
};
