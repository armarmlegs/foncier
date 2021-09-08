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
} from "./Navbar3elements";
import logo from "../../Images/Logo_Fonciere_Truffaut.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../Button";


const Navbar3 = () => {
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
                  <NavLinks to="/">Accueil</NavLinks>
                </NavItems>
                <NavItems>
                  <NavLinks to="/Operations">Opérations</NavLinks>
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
    )
}

export default Navbar3
