import React from "react";

import "./styles/variables.css";
import "./styles/global.css";
import { Footer, Navigation } from "./";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};
