import { HeroProps } from "./hero";
import { LogoListProps } from "./logo-list";
import { ProductListProps } from "./product-list";

import { AboutHeroProps } from "./about-hero";
import { AboutStatListProps } from "./about-stat-list";
import { AboutLeadershipProps } from "./about-leadership";
import { AboutLogoListProps } from "./about-logo-list";

export { default as HomepageHero } from "./hero";
export { default as HomepageLogoList } from "./logo-list";
export { default as HomepageProductList } from "./product-list";
export { default as AboutHero } from "./about-hero";
export { default as AboutStatList } from "./about-stat-list";
export { default as AboutLeadership } from "./about-leadership";
export { default as AboutLogoList } from "./about-logo-list";

export type SectionProps =
  | HeroProps
  | LogoListProps
  | ProductListProps
  | AboutHeroProps
  | AboutStatListProps
  | AboutLeadershipProps
  | AboutLogoListProps;

type Blocktypes =
  | "HomepageHero"
  | "HomepageLogoList"
  | "HomepageProductList"
  | "AboutHero"
  | "AboutStatList"
  | "AboutLeadership"
  | "AboutLogoList";

type WithBlocktype<B = Blocktypes, P = SectionProps> = {
  id: string;
  blocktype: B;
} & P;

export type HomepageBlock =
  | WithBlocktype<"HomepageHero", HeroProps>
  | WithBlocktype<"HomepageLogoList", LogoListProps>
  | WithBlocktype<"HomepageProductList", ProductListProps>
  | WithBlocktype<"AboutHero", AboutHeroProps>
  | WithBlocktype<"AboutStatList", AboutStatListProps>
  | WithBlocktype<"AboutLeadership", AboutLeadershipProps>
  | WithBlocktype<"AboutLogoList", AboutLogoListProps>;
