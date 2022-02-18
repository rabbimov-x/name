import styled ,{ createGlobalStyle , css } from "styled-components";
import {ReactComponent as svg1} from './icons/twitter.svg'
import {ReactComponent as svg2} from './icons/search.svg'
import {ReactComponent as svg3} from './icons/location.svg'
import {ReactComponent as svg4} from './icons/phone.svg'
import {ReactComponent as svgx} from './icons/x.svg'
import {ReactComponent as svg7} from './icons/telegram.svg'
import {ReactComponent as svg8} from './icons/like.svg'
import {ReactComponent as svg9} from './icons/human.svg'
import {ReactComponent as svg10} from './icons/cart.svg'
import {ReactComponent as svg11} from './icons/email.svg'
import {ReactComponent as svg12} from './icons/next.svg'
import {ReactComponent as svg13} from './icons/star_16_6.svg'
import {ReactComponent as svg14} from './icons/exchange.svg'
import {ReactComponent as svg15} from './icons/view.svg'





export const  GlobalStyle = createGlobalStyle`
  
  body{
      width: 100%;
      overflow-x: hidden;
      box-sizing: border-box;
      padding: 0;
      margin: 0;

  }

  *{
      box-sizing: border-box;
  }

  .colw-12{
      width: 100%;
      display: block;
      box-sizing: border-box;
      padding: 0 var(--mp15);
  }
  .colw-10{
      width: 83.333%;
      box-sizing: border-box;
      padding: 0 var(--mp15);
  }
  .colw-8{
      width: 66.666%;
      box-sizing: border-box;
      padding: 0 var(--mp15);

  }
  .colw-6{
      
      width: 50%;
      box-sizing: border-box;
      padding: 0 var(--mp15);
  }
  .colw-4{
      
      width: 33.333%;
      box-sizing: border-box;
      padding: 0 var(--mp15);
  }
  .colw-3{      
      width: 25%;
      box-sizing: border-box;
      padding: 0 var(--mp15);
  }
  @media (min-width: 1200px) {
      
  }

  @media (max-width: 1200px) {
      .lgcolw-12{
          width: 100%;
      }
      .lgcolw-6{
          width: 50%;
      }
      .lgcolw-4{
          width: 33.333%;
      }     
  }
  @media (max-width: 992px) {
      .mdcolw-12{
          width: 100%;
      }
      .mdcolw-6{
          width: 50%;
      }
      .mdcolw-4{
          width: 33.333%;
      }
  }
  @media (max-width: 768px) {
      .smcolw-12{
          width: 100%;
      }
      .smcolw-6{
          width: 50%;
      }
      .smcolw-4{
          width: 33.333%;
      }
  }
  @media (max-width: 576px) {
      .sxcolw-12{
          width: 100%;
      }
      .sxcolw-6{
          width: 50%;
      }
      .sxcolw-4{
          width: 33.333%;
      }
  }


`
export const H1 = styled.h1`

font-family: var(--font-familyS);
font-size : ${({size})=>size ? size : "22px"};
font-weight: ${({bold})=>bold? bold : "700"};
padding: ${({pd})=>pd? pd : "0"};
margin: ${({mr})=>mr? mr : "0"};
color : ${({color})=>color ? color : "var(--cl-navlink)"};
text-transform: uppercase;
`
export const P = styled(H1)`
font-family: var(--font-familyR);
font-weight: 500;
font-size : ${({size})=>size ? size : "14px"};
text-transform: none;
`

export const Container = styled.div`
display: flex;
flex-direction: ${({flex})=> flex? "column" : "none"};
flex-wrap: ${({nowrap})=> nowrap? "nowrap" : "wrap"};
justify-content: ${({justify})=>justify? justify: "left" };
align-items: ${({align})=>align? "center": "" };
padding: ${({pd})=>pd? pd : "0"} 5%;
`
export const Col12 = styled.div`    
      width: 100%;
      display: ${({display})=>display? display : "block"};
      justify-content: ${({justify})=>justify? justify : "block"};
      align-items: ${({align})=>align? align : "block"};
      box-sizing: border-box;
      padding: ${({pd})=>pd? pd : "0 var(--mp15)"} ;
`
export const Col10 = styled(Col12)`
    width: 83.333%;
`
export const Col8 = styled(Col12)`
    width: 66.666%;
`
export const Col6 = styled(Col12)`
    width: 50%;
`
export const Col4 = styled(Col12)`
    width: 33.333%;
`
export const Col3  = styled(Col12)`
    width: 25%;
`
export const Div = styled.div`
display: ${({display})=>display ? display : "block"};
justify-content: ${({justify})=>justify ? justify : "left"};
align-items: ${({align})=>align ? align : "left"};
flex-direction: ${({flex})=>flex ? flex : "left"};
margin: ${({mr})=>mr? mr : "0"};
padding: ${({pd})=>pd ? pd : "left"};
width: ${({w})=>w? w : `100%`};
position: ${({position})=>position? position : `relative`};

`

export const LinkA = styled.a`
text-decoration: none;
color: var(--cl-white);
font-family: var(--font-familyR);
font-size: var(--size12);
font-weight: ${({bold})=> bold ? "600" : "500"};
display: flex;
align-items: center;
margin: ${({mr})=>mr? mr : "0 5px"};
color: ${({color})=> color ? color : "var(--cl-white)"};

&:hover{
    color: var(--cl-red);
    fill:red;
}
`
export const Icon = styled.div`

`
// Svg larga stel berilgan

const common = css`
width: ${({w})=>w? w : `var(--icon-w12)`};
height: auto;
margin: ${({mr})=>mr? mr : "0"};
display: ${({display})=>display? display : "bloke" };

 & path{
     fill: ${({color})=>color ? color : `var(--cl-white)`};
     stroke: ${({color})=>color ? color : `var(--cl-white)`};
     
 }
`

Icon.Twitter = styled(svg1)`

${common}
`
Icon.Search = styled(svg2)`

${common}
`
Icon.Location = styled(svg3)`
${common}
`
Icon.Phone = styled(svg4)`
${common}
`
Icon.X = styled(svgx)`
${common}
`
Icon.Telegram = styled(svg7)`
${common}
`
Icon.Like = styled(svg8)`
${common}
`
Icon.Human = styled(svg9)`

${common}
`
Icon.Cart = styled (svg10)`
${common}
`
Icon.Email = styled (svg11)`
${common}
`

Icon.Next = styled (svg12)`
${common}
`

Icon.Star = styled (svg13)`
${common}
`

Icon.Exchange = styled (svg14)`
${common}
`
Icon.View = styled (svg15)`
${common}
`