import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type {
  FoodSkeleton,
  Loc,
  Mod,
  QuantitySkeleton,
  UnitSkeleton,
} from "./";
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
type I<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<IngredientSkeleton, Modifiers, Locales>;

export type Ingredient = I<Mod, Loc>;
