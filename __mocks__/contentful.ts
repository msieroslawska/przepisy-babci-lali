import { testRecipe } from "@test/fixtures/recipe";
import { vi } from "vitest";

const mockClient = {
  withoutUnresolvableLinks: {
    withAllLocales: {
      getEntries: vi.fn().mockResolvedValue({
        items: [testRecipe],
      }),
      getEntry: vi.fn().mockResolvedValue({}),
      getAsset: vi.fn().mockResolvedValue({}),
    },
  },
};

const createClient = vi.fn(() => mockClient);

export default {
  createClient,
};
