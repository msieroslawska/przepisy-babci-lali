import React from "react";

import "./styles/variables.css";
import "./styles/global.css";
import Navigation from "./navigation";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Template: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Template;
