import styled from "styled-components";
import { Container } from '../../globalStyles'; 
import { Link } from 'react-router-dom';




export const Navbar = styled.div`

margin-bottom:10px;

background:#6b705c;
width:100%;
height:80px;
display:flex;
justify-content:center;
align-items:center;
font-size:25px;
position:fixed;
top:0;
z-index:999;
`

export const NavContainer = styled(Container)`
display:flex;
justify-content:space-between;
height:80px;

${Container}


`


export const NavLogo = styled(Link)`
color:#fff;
justify-self:flex-start;
cursor:pointer;
text-decoration:none;
font-size:2rem;
display:flex;
align-items:center;
`


export const NavIcon = styled.img`
margin-right:0.5rem;
width:40%;

`;


export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:960px){
 
    display: block;
    position:absolute;
    top:0;
    right:0;
    cursor: pointer;
    transform: translate(-100%, 60%);
    font-size:1.8rem;
    cursor:pointer;
}

`

export const NavMenu = styled.ul`

display:flex;
align-items:center;
list-style:  none;
text-align:center;

@media screen and (max-width:960px){
    display:flex;
    flex-direction:column;
    width:100%;
    height:800px;
    position:absolute;
    top:80px;
    left:${({click}) => (click ? 0 : '-100%')};
    opacity:1;
    transition:all 0.5s ease;
    background:#a5a58d;

    
}

`

export const NavItems = styled.li`
height:100px;



&:hover {
    color:#FFF;

}

@media screen and (max-width:960px) {
width:100%;

&:hover{
    border:none;

}
}


`


export const NavLinks = styled(Link)`

color:#000;
display:flex;
cursor:pointer;
align-items:center;
font-size:16px;
text-decoration:none;
padding:3rem 1rem;
height:100%;
&:hover {
    color:#FFF;

}


@media screen and (max-width:960px){
text-align:center;
padding:2rem;
width:100%;
display:table;

&:hover{
color:#FFF;
transition:all 0.3s ease

}

}`


export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 120px;
  }
`;