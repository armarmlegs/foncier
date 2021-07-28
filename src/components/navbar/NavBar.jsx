import React, { useState } from "react";
import {
  Navbar,
  NavContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavItems,
  NavLinks,
  NavMenu,
  NavItemBtn,
} from "./NavbarElements";
import logo from "../../images/Logo_Fonciere_Truffaut.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../Button";

const NavBar2 = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "000" }}>
        <Navbar>
          <NavContainer>
            <NavLogo to="/">
              <NavIcon src={logo} />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItems>
                <NavLinks onClick={handleClick} click={click} to="about">Accueil</NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks onClick={handleClick} click={click} to="operations">Opérations</NavLinks>
              </NavItems>
              <NavItemBtn to="/Contact">

              <Button to="/Contact" primary="false">
                  Contact
                </Button>
                </NavItemBtn>
            </NavMenu>
          </NavContainer>
        </Navbar>
      </IconContext.Provider>
    </>
  );
};

export default NavBar2;
