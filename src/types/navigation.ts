import type { Entry, EntryFields } from "contentful";

export interface TypeNavigationFields {
  navigationLink: Entry<TypeNavigationItemFields>[];
}

export type TypeNavigation = Entry<TypeNavigationFields>;

export interface TypeNavigationItemFields {
    name: EntryFields.Symbol;
    link: EntryFields.Symbol;
}

export type TypeNavigationItem = Entry<TypeNavigationItemFields>;