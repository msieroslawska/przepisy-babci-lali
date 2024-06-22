import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  integrations: [icon(), tailwind()],
  remotePatterns: [{ protocol: "https" }],
  domains: ["images.ctfassets.net"],
});
