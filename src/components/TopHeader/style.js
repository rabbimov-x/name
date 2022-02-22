import styled, {css} from "styled-components";


export const HeaderStyle =styled.div`
width: 100%;
height: auto;
padding: ${({pd})=>pd? pd : "0"};
`
export const LightHeader = styled(HeaderStyle)`
background-color: var(--cl-bg-addcard);
.top-link{
    position: relative;
}
@media (max-width: 635px) {
    .top-links{
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 5px 0;
    }
}
@media (max-width: 470px) {
    .top-links{
        display: none;
    }
}
`

export const DarkHeader = styled(HeaderStyle)`
background-color: var(--cl-dark);
.yuorCart{
           position: relative;

        }
@media (max-width: 956px) {
      .yuorCart{
           display : none;
        }
        .searchCol{
            width: 65%;
            margin-left: auto;
        }
      
    }
    .searchCol{
   @media (max-width: 767px) {
       width: 100%;
       padding: 15px;
   }
   @media (max-width: 576px) {
       width: 100%;
       padding: 0px;
   }
}
.Logo{
    @media (max-width: 767px) {
       margin: 0 auto;
       padding-top: 15px;
   }      
        }  

`
export const AddCart = styled.div`
    position: absolute;
    display: block;
    width: 300px;
    background: #FFF;
    box-shadow: 0px 0px 0px 2px #e4e7ed;
    z-index: 99;
    right: 0;
    top: 55px;

    @media(max-width: 992px) {
        display: none;
    }
    
    .CardAll{
        width: 100%;
        max-height: 180px;
        overflow-y: scroll;
    }
    .line{
        width: 90%;
        height: 2px;
        background-color: var(--cl-line);
        margin: 0 15px 0;
    }
`
AddCart.Card  = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 15px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    position: relative;

    & .xicon{
        position: absolute;
        width: 14px;
        height: 14px;
        left:-8px;
        padding: 1px;
        top:0px;        
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--cl-dark-grey);
        &> svg{
            width: 70%;
            font-weight: 700;
        }
    }
    & .img{
        width: 40px;
        height: 40px;
        margin-right: 30px;
        &> img{
            width:100%;
            height: 100%;
        }
    }
    
`
AddCart.Buttonright = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background-color: var(--cl-dark-grey);
    color: var(--cl-white);
    font-weight: 700;
    font-size : var(--size18);
`

AddCart.Buttonleft = styled(AddCart.Buttonright)`
    background-color: var(--cl-red);
    bottom: 0;
    right: 0;

`
// =============================================================
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
height: auto;
outline: none;
border: 0;


font-size: var(--sizeop);
border-radius: 40px 0 0 40px ;
border-right: 2px solid var(--cl-line) ;
background-color: var(--cl-white);
padding: 11px 0 11px 10px; 

@media (min-width: 1440px) {
    padding: 12px 0 12px 15px;
}
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
@media (max-width: 576px) {
    width: 50%;
}

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


