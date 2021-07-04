import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
&::-webkit-scrollbar{
width: 0.5rem;
}
&::-webkit-scrollbar-thumb{
    background-color: darkgrey;
    border-radius: 1rem;
}
}

body{
    font-family: "Montserrat", sans-serif;
    width: 100%;
}
h2{
    font-size: 3rem;
    font-family: "Tourney", cursive;
    
}
h3{
    font-size: 1.3rem;
    padding: 1rem;
    color: #333;
}
p{
    font-size: 1rem;
    color: #696969;
    line-height: 150%;
}
a{
    text-decoration: none;
    color: #333;
}
`;

export default GlobalStyles;
