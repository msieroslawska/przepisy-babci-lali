import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeHeroFields {
  name: EntryFields.Symbol;
  image?: Asset;
  description: EntryFields.Text;
}

export type TypeHero = Entry<TypeHeroFields>;