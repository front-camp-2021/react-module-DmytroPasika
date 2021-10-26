import React from "react";
import { NavBar } from "../navigation/nav-bar";

export const Layout = ({ children }) => {
  return (
    <div className="App" style={{ padding: "30px" }}>
      <NavBar />
      {children}
    </div>
  );
};
