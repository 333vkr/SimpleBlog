import React, { useRef } from "react";
import { Logo } from "../components/Logo";
import LogoImg from "../assets/images/logo.png";
import { NavGroup } from "../layout/NavGroup";
import { NavMenu } from "../components/NavMenu";
import "../assets/css/footer.css";
import { SocialIconGroup } from "./SocialIconGroup";
import { SocialIcon } from "../components/SocialIcon";

//icons
const fb = <i class="bi bi-facebook"></i>;
const twitter = <i className="bi bi-twitter"></i>;
const pin = <i class="bi bi-pinterest"></i>;
const insta = <i class="bi bi-instagram"></i>;
export const Footer = () => {
  return (
    <footer>
      <div className="footer-parent">
        <Logo src={LogoImg} alt="site branding" />
        <div className="footer-nav-group">
          <NavGroup>
            <NavMenu
              label="ABOUT ME"
              href="/about"
              color="#4F4F4F"
              fontSize="0.6rem"
            />
            <NavMenu
              label="CONTACT ME"
              href="/contact"
              color="#4F4F4F"
              fontSize="0.6rem"
            />
            <NavMenu
              label="ADVERTISING"
              href="/advertise"
              color="#4F4F4F"
              fontSize="0.6rem"
            />
            <NavMenu
              label="TERMS OF USE"
              href="/terms"
              color="#4F4F4F"
              fontSize="0.6rem"
            />
            <NavMenu
              label="SUBSCRIBE"
              href="/subscribe"
              color="#4F4F4F"
              fontSize="0.6rem"
            />
          </NavGroup>
        </div>
        <SocialIconGroup>
          <SocialIcon icon={fb} />
          <SocialIcon icon={twitter} />
          <SocialIcon icon={pin} />
          <SocialIcon icon={insta} />
        </SocialIconGroup>

        <p className="copy-right-text">
          &copy; Copyright logoipsum. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
