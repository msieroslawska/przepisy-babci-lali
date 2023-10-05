import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

interface QuantityFields {
    id: EntryFieldTypes.Symbol;
    quantityName: EntryFieldTypes.Number;
}

export type QuantitySkeleton = EntrySkeletonType<QuantityFields, "quantity">;
export type Quantity<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<QuantitySkeleton, Modifiers, Locales>;