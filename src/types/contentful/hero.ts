import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface HeroFields {
    name: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.Text;
}

export type HeroSkeleton = EntrySkeletonType<HeroFields, "hero">;
export type Hero<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<HeroSkeleton, Modifiers, Locales>;