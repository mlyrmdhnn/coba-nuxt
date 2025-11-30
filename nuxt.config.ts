// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  pages: true,
  ssr: true,
  runtimeConfig: {
    apiSecret: "123",
    public: {
      apiBase: "https://example.com",
    },
  },
  app: {
    head: {
      title: "Title Default dari nuxt.config",
      meta: [{ name: "Deskripsi Default", content: "Deskripsi Default juga" }],
    },
  },
});
