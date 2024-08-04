import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { Mod, Loc } from "./";

interface FoodFields {
  id?: EntryFieldTypes.Symbol;
  foodName: EntryFieldTypes.Symbol;
}

export type FoodSkeleton = EntrySkeletonType<FoodFields, "food">;
type F<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  FoodSkeleton,
  Modifiers,
  Locales
>;

export type Food = F<Mod, Loc>;
