import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { Mod, Loc } from "./";

export interface HeroFields {
  name: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  description: EntryFieldTypes.Text;
}

export type HeroSkeleton = EntrySkeletonType<HeroFields, "hero">;
type H<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  HeroSkeleton,
  Modifiers,
  Locales
>;

export type Hero = H<Mod, Loc>;
