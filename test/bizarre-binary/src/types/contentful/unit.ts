import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

interface UnitFields {
    id: EntryFieldTypes.Symbol;
    modifier?: EntryFieldTypes.Symbol;
    unitName: EntryFieldTypes.Symbol;
}

export type UnitSkeleton = EntrySkeletonType<UnitFields, "unit">;
export type Unit<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<UnitSkeleton, Modifiers, Locales>;