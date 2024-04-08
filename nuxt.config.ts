import localizedRoutes from "./lang/routes.json" assert { type: "json" };

export default defineNuxtConfig({
  imports: {
    autoImport: true,
  },
  css: ["~/assets/css/main.css"],
  build: {
    postcss: {
      order: "cssnanoLast",
    },
  },
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
    preset: "firebase",
    firebase: {
      gen: 2,
    },
    // prerender: {
    //   routes: [
    //     "/",
    //     "/skins",
    //     "/contact",
    //     "/about-us",
    //     "/legal/terms",
    //     "/legal/privacy",
    //     "/legal/rules",
    //     "/legal/security",
    //   ],
    // },
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
    "@vite-pwa/nuxt",
    "@vee-validate/nuxt",
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
    auth: {
      enabled: true,
    },
    emulators: {
      enabled: false,
    }
  },
  pwa: {
    manifest: {
      name: "Stick Nodes Skins",
      short_name: "SNSkins",
      theme_color: "#1f8fff",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
  },
  security: {
    headers: {
      contentSecurityPolicy: {
        "img-src": [
          "'self'",
          "data:",
          "https://api.dicebear.com",
          "https://firebasestorage.googleapis.com",
        ],
      },
      crossOriginEmbedderPolicy: "unsafe-none",
    },
  },
});
