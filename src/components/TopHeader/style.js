import styled, {css} from "styled-components";


export const HeaderStyle =styled.div`
width: 100%;
height: auto;
padding: ${({pd})=>pd? pd : "0"};
`
export const LightHeader = styled(HeaderStyle)`
background-color: var(--cl-bg-addcard);
`

export const DarkHeader = styled(HeaderStyle)`
background-color: var(--cl-dark);

`
export const Count = styled.div`
width: 20px;
height: 20px;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--cl-red);
border-radius: 50%;
font-size: var(--size10);
color: var(--cl-white);
position: absolute;
top: ${({top})=>top? top : "0"};
right: ${({right})=>right? right : "0"};
`
export const Logo = styled.img`
width: 169px;
height: 70px;
`

const divin = css`
height: auto;
border: none;
padding: 12px 0;
color: var(--cl-navlink);
font-size: var(--size14);
font-family : var(--font-familyR);

`
export const DivIn = styled.form`
background-size: cover;
width: 100%;      
padding: 0;
border-radius: 40px  0 0 40px;
overflow-x: hidden;

`
DivIn.Sellect = styled.select`
${divin}
width:  30%;
outline: none;
border: 0;

border-radius: 40px 0 0 40px ;
border-right: 2px solid var(--cl-line) ;
background-color: var(--cl-white);
padding: 11px 0 11px 10px; 
&::-ms-expand{
    display: none;
}
` 
DivIn.Input = styled.input`
${divin}            
width: 50%;
height: 100%;
padding: none;
padding-left: 15px;
outline: none;
background-color: var(--cl-white);
`
DivIn.Button = styled.button`
${divin}
width: 20%;
font-size: var(--size14);
font-weight: bold;
font-family : var(--font-familyR);
color: var(--cl-white);
background-color: var(--cl-red);
border-radius: 0 40px 40px 0;
`


