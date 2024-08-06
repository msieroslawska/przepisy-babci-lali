import { describe, expect, it } from "vitest";
import {
  createIngredientString,
  parseIngredients,
} from "@utils/getContentfulValues";
import { eggsIngredient, flourIngredient } from "@test/fixtures/ingredient";
import type { Ingredient } from "types";

describe("createIngredientString()", () => {
  it("creates a string if all 3 parts are present", () => {
    const result = createIngredientString("250", "g", "flour");

    expect(result).toBe("250 g flour");
  });

  it("creates a string if quantity is a number", () => {
    const result = createIngredientString(250, "g", "flour");

    expect(result).toBe("250 g flour");
  });

  it("creates a string if one of the parts is missing", () => {
    const result = createIngredientString("g", "flour");

    expect(result).toBe("g flour");
  });

  it("creates a string if unit is not provided", () => {
    const result = createIngredientString(2, "eggs");

    expect(result).toBe("2 eggs");
  });

  it("creates a string if one of the parts is undefined", () => {
    const result = createIngredientString(2, undefined, "eggs");

    expect(result).toBe("2 eggs");
  });

  it("creates a string if one of the parts is an empty string", () => {
    const result = createIngredientString(2, "", "eggs");

    expect(result).toBe("2 eggs");
  });

  it("creates a string if one of the parts is 1", () => {
    const result = createIngredientString(1, undefined, "egg");

    expect(result).toBe("1 egg");
  });
});

describe("parseIngredients()", () => {
  it("creates parsed ingredients when all necessary fields are present", () => {
    const result = parseIngredients([flourIngredient, eggsIngredient]);

    expect(result).toHaveProperty("en");
    expect(result.en).toHaveLength(2);
    expect(result.en[0]).toBe("250 g flour");
    expect(result.en[1]).toBe("2 eggs");

    expect(result).toHaveProperty("pl");
    expect(result.en).toHaveLength(2);
    expect(result.pl[0]).toBe("250 g mąki");
    expect(result.pl[1]).toBe("2 jajka");
  });

  it("does not complain if quantity name is missing", () => {
    const malformedIngredient = {
      ...flourIngredient,
      fields: {
        ...flourIngredient.fields,
        quantity: {
          en: {
            ...flourIngredient.fields.quantity?.en,
            fields: {
              ...flourIngredient.fields.quantity?.en?.fields,
              quantityName: { en: "" },
            },
          },
        },
      },
    };
    const result = parseIngredients([
      malformedIngredient as unknown as Ingredient,
    ]);

    expect(result).toHaveProperty("en");
    expect(result.en).toHaveLength(1);
    expect(result.en[0]).toBe("g flour");

    expect(result).toHaveProperty("pl");
    expect(result.en).toHaveLength(1);
    expect(result.pl[0]).toBe("g mąki");
  });
});
