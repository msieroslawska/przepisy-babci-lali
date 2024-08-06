/// <reference types="vitest" />
import { getViteConfig } from "astro/config";
import { defaultExclude } from "vitest/config";

export default getViteConfig(
  {
    test: {
      exclude: ["**/integration/**", ...defaultExclude],
      coverage: {
        exclude: ["**/integration/**", ...defaultExclude],
      },
    },
  },
  {
    site: "https://przepisy-babci-lali.netlify.app/",
    trailingSlash: "always",
  }
);
