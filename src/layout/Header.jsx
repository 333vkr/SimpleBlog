import React from "react";
import { Logo } from "../components/Logo";
import { NavMenu } from "../components/NavMenu";
import { NavGroup } from "./NavGroup";

export const Header = () => {
  return (
    <header>
      <Logo />
      <NavGroup>
        <NavMenu />
      </NavGroup>
    </header>
  );
};
