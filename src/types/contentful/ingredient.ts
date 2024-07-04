import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { FoodSkeleton } from "./food";
import type { QuantitySkeleton } from "./quantity";
import type { UnitSkeleton } from "./unit";

interface IngredientFields {
  id?: EntryFieldTypes.Symbol;
  quantity?: EntryFieldTypes.EntryLink<QuantitySkeleton>;
  unit?: EntryFieldTypes.EntryLink<UnitSkeleton>;
  food: EntryFieldTypes.EntryLink<FoodSkeleton>;
}

export type IngredientSkeleton = EntrySkeletonType<
  IngredientFields,
  "ingredient"
>;
type Ingredient<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<IngredientSkeleton, Modifiers, Locales>;
