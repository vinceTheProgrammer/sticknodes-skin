import localizedRoutes from "./lang/routes.json" assert { type: "json" };

export default defineNuxtConfig({
  imports: {
    autoImport: true,
  },
  css: ["~/assets/css/main.css"],
  routeRules: {
    "/settings": { redirect: "/settings/appearance" },
    "/dashboard": { redirect: "/dashboard/overview" },
    "/tools": { redirect: "/tool/template" },
    "/browse": { redirect: "/browse/skins" },
    "/upload": { redirect: "/upload/file-upload" },
    "/legal": { redirect: "/legal/terms" },
  },
  devtools: { enabled: false },
  nitro: {
    // preset: "firebase",
    prerender: {
      routes: [
        "/",
        "/skins",
        "/contact",
        "/about-us",
        "/legal/terms",
        "/legal/privacy",
        "/legal/rules",
        "/legal/security",
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-security",
    "@nuxtjs/i18n",
    "nuxt-typed-router",
    "nuxt-time",
    "nuxt-twemoji",
    "nuxt-vuefire",
    "nuxt-icon",
    "nuxt-lodash",
    // monaco-editor
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
        name: "English",
        file: "en-US.json",
      },
      {
        code: "es",
        name: "Español",
        file: "es-ES.json",
      },
      {
        code: "fr",
        name: "Français",
        file: "fr-FR.json",
      },
      {
        code: "fs",
        name: "Fake Simlish",
        file: "fs-FS.json",
      },
      {
        code: "do",
        name: "Dovahzul",
        file: "do-OK.json",
      },
    ],
    customRoutes: "config",
    pages: localizedRoutes.pages,
  },
  vuefire: {
    config: {
      apiKey: "AIzaSyB9Hz65j5Iz8X0_fMofCk01AWfjS1v1-SY",
      authDomain: "sticknodes-skin.firebaseapp.com",
      databaseURL: "https://sticknodes-skin-default-rtdb.firebaseio.com",
      projectId: "sticknodes-skin",
      storageBucket: "sticknodes-skin.appspot.com",
      messagingSenderId: "784321517642",
      appId: "1:784321517642:web:c7466ddabd2999461faeb3",
      measurementId: "G-0C6559S2XY",
    },
    admin: {
      serviceAccount: "credentials.json",
    },
  },
});
