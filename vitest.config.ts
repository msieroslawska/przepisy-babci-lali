/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig(
  {
    test: {},
  },
  {
    site: "https://przepisy-babci-lali.netlify.app/",
    trailingSlash: "always",
  }
);
