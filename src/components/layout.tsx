import React from "react";

import "./variables.css";
import "./global.css";
import Seo from "./seo";
import Navigation from "./navigation";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
  location?: any;
}

const Template: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Seo />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Template;
