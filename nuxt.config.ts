// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  colorMode: {
    preference: "light",
  },
  modules: [
    "@nuxtjs/supabase",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lato: true,
          Besley: true,
        },
      },
    ],
    "@nuxt/ui",
    "@pinia/nuxt",
  ],
  ui: {
    icons: ["bi"],
  },
  supabase: {
    redirect: false,
  },
  pages: true,
  nitro: {
    storage: {
      data: {
        driver: "vercelKV",
      },
    },
  },
});
