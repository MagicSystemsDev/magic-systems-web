import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: "https://magicsystemsdev.github.io",
  base: "/magic-systems-web",
  integrations: [sitemap({ filter: (page) => page.endsWith("/") })],
});
