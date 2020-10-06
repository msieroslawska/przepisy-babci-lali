import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavigationWrapper = styled.ul`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
`;

const NavigationElement = styled.li`
  margin: 0 5px;
`;

const links = [
  { to: "/", name: "Strona główna" },
  { to: "/recipeList", name: "Lista przepisów" }
];

const renderLinks = allLinks =>
  allLinks.map(l => (
    <NavigationElement key={l.name}>
      <Link to={l.to}>{l.name}</Link>
    </NavigationElement>
  ));

export const Navigation = () => (
  <NavigationWrapper>
    {renderLinks(links)}
  </NavigationWrapper>
);
