import React from "react";

import "./styles/variables.css";
import "./styles/global.css";
import Navigation from "./navigation";
import Footer from "./footer";
import { Language } from "../types";

interface LayoutProps {
  children: React.ReactNode;
  language: Language;
}

const Layout: React.FC<LayoutProps> = ({ children, language }) => {
  return (
    <>
      <Navigation language={language} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
