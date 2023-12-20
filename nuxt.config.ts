// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lato: [400],
          Bentsley: [400],
        },
      },
    ],
    "@nuxt/ui",
  ],
});
