import React from "react";
import { Logo } from "../components/Logo";
import { NavMenu } from "../components/NavMenu";
import { NavGroup } from "./NavGroup";
import LogoImg from '../assets/images/logo.png'
import '../assets/css/header.css'
export const Header = () => {
  return (
    <header className="header">
      <Logo src={LogoImg} alt='site branding'/>
      <NavGroup>
        <NavMenu href='/' label='HOME'  fontFamily='Montserrat'/>
        <NavMenu href='/list' label='BLOG' fontFamily='Montserrat'/>
      </NavGroup>
    </header>
  );
};
