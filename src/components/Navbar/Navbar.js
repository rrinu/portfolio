import React, { useState } from "react";
import {
  NavList,
  NavLogo,
  NavMenuList,
  StyledCTA,
  StyledNavbar,
  StyledNavLinks,
} from "../styles/Navbar.styled";
import logo from "../../assets/logo.png";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Height
  const stickyNavFunction = () => {
    if (window.scrollY >= 510) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  window.addEventListener("scroll", stickyNavFunction);

  const toTop = () => {
    scroll.scrollToTop({ delay: 0, duration: 0 });
  };

  // mobile toggle
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavbar className={stickyNav ? "sticky" : ""}>
      <div>
        <NavLogo to="/" onClick={toTop} src={logo} alt="logo" />
      </div>
      <NavMenuList>
        <NavList>
          <StyledNavLinks
            to="home"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            Home
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            Projects
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            About
          </StyledNavLinks>
        </NavList>
       
      </NavMenuList>
      <StyledCTA
        href="mailto:rinurahim018@gmail.com "
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <span>
           
            get in touch
          </span>
        </span>
      </StyledCTA>
    </StyledNavbar>
  );
};

export default Navbar;
