import styled,{ createGlobalStyle } from "styled-components";




const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Darker Grotesque', sans-serif;
    box-sizing:border-box;
    margin:0;
    padding:0;
   
   
  
    
}`

export const Container = styled.div`

z-index:1;
/* width:100%; */
/* min-height:1536px; */

max-width:1536px;



 /* margin-right:auto;
margin-left: auto; */

/* padding-right:15px;
padding-left:50px; */

@media screen and (max-width:991px) {
    /* padding-right: 15px;
    padding-left: 15px; */
}

`


export default GlobalStyle;