module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "snsDark",
    themes: [
      {
        snsDark: {
          primary: "#1f8fff",
          secondary: "#343434",
          accent: "#8fff1f",
          neutral: "#5b5b5b",
          "base-100": "#1d232a",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
        snsLight: {
          primary: "#1f8fff",
          secondary: "#c9c9c9",
          accent: "#8fff1f",
          neutral: "#bababa",
          "base-100": "#efefef",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
};
