import React from "react";
import styled from "styled-components";
import { FooterLink } from "../../types/links";

const FooterWrapper = styled.ul`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
`;

const FooterElement = styled.li`
  margin: 0 5px;
`;

const links: FooterLink[] = [
  {
    href: "https://github.com/msieroslawska/przepisy-babci-lali",
    name: "github.com/msieroslawska/przepisy-babci-lali",
  },
  { href: "https://www.gatsbyjs.com/", name: "Built in Gatsby" },
];

const renderLinks = (allLinks: FooterLink[]) =>
  allLinks.map(l => (
    <FooterElement key={l.name}>
      <a href={l.href}>{l.name}</a>
    </FooterElement>
  ));

export const Footer: React.FC = () => (
  <FooterWrapper>{renderLinks(links)}</FooterWrapper>
);
