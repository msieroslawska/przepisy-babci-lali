import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

interface FoodFields {
    id?: EntryFieldTypes.Symbol;
    foodName: EntryFieldTypes.Symbol;
}

export type FoodSkeleton = EntrySkeletonType<FoodFields, "food">;
export type Food<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<FoodSkeleton, Modifiers, Locales>;