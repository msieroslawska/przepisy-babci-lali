import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { Loc, Mod } from "./";

interface UnitFields {
  id: EntryFieldTypes.Symbol;
  modifier?: EntryFieldTypes.Symbol;
  unitName: EntryFieldTypes.Symbol;
}

export type UnitSkeleton = EntrySkeletonType<UnitFields, "unit">;
type U<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  UnitSkeleton,
  Modifiers,
  Locales
>;

export type Unit = U<Mod, Loc>;
