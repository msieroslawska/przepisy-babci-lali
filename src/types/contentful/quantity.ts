import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { Mod, Loc } from "./";

interface QuantityFields {
  id: EntryFieldTypes.Symbol;
  quantityName: EntryFieldTypes.Number;
}

export type QuantitySkeleton = EntrySkeletonType<QuantityFields, "quantity">;
type Q<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  QuantitySkeleton,
  Modifiers,
  Locales
>;

export type Quantity = Q<Mod, Loc>;
