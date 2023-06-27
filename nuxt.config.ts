// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/assets/css/main.css",
  ],
  routeRules: {
    "/settings": { redirect: "/settings/appearance" },
    "/dashboard": { redirect: "/dashboard/overview" },
    "/tools": { redirect: "/tool/template" },
    "/browse": { redirect: "/browse/skins" },
    "/upload": { redirect: "/upload/file-upload" },
    "/legal": { redirect: "/legal/terms" },
  },
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome",
    ], // ⚠️ important ⚠️
  },
  devtools: { enabled: false },
  nitro: {
    preset: "firebase",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-security",
    "@nuxtjs/i18n",
    [
      "nuxt-viewport",
      {
        viewport: {
          breakpoints: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            "2xl": 1536,
          },

          defaultBreakpoints: {
            desktop: "lg",
            mobile: "xs",
            tablet: "md",
          },
          fallbackBreakpoint: "lg",
        },
      },
    ],
  ],
  i18n: {
    baseUrl: "https://sticknodes.skin",
    lazy: true,
    langDir: "lang",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        file: "en-US.json",
      },
      {
        code: "es",
        file: "es-ES.json",
      },
      {
        code: "fr",
        file: "fr-FR.json",
      },
    ],
  },
});
