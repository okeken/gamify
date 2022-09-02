import React from "react";
import { Footer } from "../Footer";
import { HeaderNav } from "../HeaderNav";

export const Layout = ({ children }) => {
  return (
    <>
      <HeaderNav />
      {children}
      <Footer />
    </>
  );
};
