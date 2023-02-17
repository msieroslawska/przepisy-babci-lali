import { HeroProps } from "./hero";
import { ProductListProps } from "./product-list";

import { AboutHeroProps } from "./about-hero";
import { AboutStatListProps } from "./about-stat-list";
import { AboutLeadershipProps } from "./about-leadership";

export { default as HomepageHero } from "./hero";
export { default as HomepageProductList } from "./product-list";
export { default as AboutHero } from "./about-hero";
export { default as AboutStatList } from "./about-stat-list";
export { default as AboutLeadership } from "./about-leadership";

export type SectionProps =
  | HeroProps
  | ProductListProps
  | AboutHeroProps
  | AboutStatListProps
  | AboutLeadershipProps;

type Blocktypes =
  | "HomepageHero"
  | "HomepageProductList"
  | "AboutHero"
  | "AboutStatList"
  | "AboutLeadership";

type WithBlocktype<B = Blocktypes, P = SectionProps> = {
  id: string;
  blocktype: B;
} & P;

export type HomepageBlock =
  | WithBlocktype<"HomepageHero", HeroProps>
  | WithBlocktype<"HomepageProductList", ProductListProps>
  | WithBlocktype<"AboutHero", AboutHeroProps>
  | WithBlocktype<"AboutStatList", AboutStatListProps>
  | WithBlocktype<"AboutLeadership", AboutLeadershipProps>;
