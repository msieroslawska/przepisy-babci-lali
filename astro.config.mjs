import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  remotePatterns: [{ protocol: "https" }],
  domains: ["images.ctfassets.net"],
});
