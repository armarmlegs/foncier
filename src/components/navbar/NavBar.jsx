import React, { useState } from "react";
import {
  YoungDiv,
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
import logo from "../../Images/Logo_Fonciere_Truffaut.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../Button";
import { Container } from "../../globalStyles";

const NavBar2 = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Container>
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
                <YoungDiv>
                  <NavItems>
                    <NavLinks onClick={handleClick} click={click} to="/">
                      Accueil
                    </NavLinks>
                  </NavItems>
                  <NavItems>
                    <NavLinks
                      onClick={handleClick}
                      click={click}
                      to="/Operations"
                    >
                      Opérations
                    </NavLinks>
                  </NavItems>
                  <NavItemBtn to="/Contact">
                    <Button to="/Contact" primary="false">
                      Contact
                    </Button>
                  </NavItemBtn>
                </YoungDiv>
              </NavMenu>
            </NavContainer>
          </Navbar>
        </IconContext.Provider>
      </Container>
    </>
  );
};

export default NavBar2;
