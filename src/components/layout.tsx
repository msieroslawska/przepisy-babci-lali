import React from "react";

import "./styles/variables.css";
import "./styles/global.css";
import Navigation from "./navigation";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
  location: string;
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  return (
    <>
      <Navigation location={location} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
