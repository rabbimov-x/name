import React from "react";
import {Col6,Col3, Container,Div,Icon,LinkA} from "../../GlobalStyle"
import {DarkHeader, DivIn, HeaderStyle,Count, LightHeader, Logo} from "./style"
const TopHeader = ()=>{
    return(
        <HeaderStyle>
            <LightHeader>
                <Container pd = "10px">
                  <Div className="top-links" display = "flex" w = "auto"  align="center">
                    <LinkA href="+99890-338-30-00" >
                        <Icon.Phone color = " var(--cl-red)" mr = "0 10px 0 0" />
                        +99890-338-30-00                        
                    </LinkA>
                    
                    <LinkA href="email@email.com" >
                        <Icon.Email color = " var(--cl-red)" mr = "0 10px 0 0" />
                        email@email.com                        
                    </LinkA>
                    <LinkA href="+99890-338-30-00" >
                        <Icon.Location color = " var(--cl-red)" mr = "0 10px 0 0" />
                        1734 Stonecoal Road                     
                    </LinkA>
                  </Div>
                  <Div className="top-links" display = "flex" w = "auto" align = "center" mr = "0 0 0 auto">
                        <LinkA href="/usd" >
                            <Icon.Location color = " var(--cl-red)" mr = "0 10px 0 0" />
                            USD                     
                        </LinkA>
                        
                        <LinkA href="/cart" >
                            <Icon.Human color = " var(--cl-red)" mr = "0 10px 0 0" />
                            Yuor Cart                     
                        </LinkA>
                        
                  </Div>
                </Container>
            </LightHeader>
            <DarkHeader pd = "15px 0 15px 0">
                <Container className="Container">
                    <Col3 className="Logo">
                        <Logo src = "./assets/images/png/Без названия.webp" alt="error"></Logo>
                    </Col3>
                    <Col6 className="searchCol" display = "flex" align = "center" >
                        <DivIn>
                            <DivIn.Sellect >
                                <option value="0">All Catigori</option>
                                <option value="1"> All</option>
                                <option value="2">2 option</option>
                                <option value="3">3 otpion</option>
                            </DivIn.Sellect>
                            <DivIn.Input type = "text"  placeholder="Search here"></DivIn.Input>
                            <DivIn.Button    type = "sumbit">Searche</DivIn.Button>
                        </DivIn>
                    </Col6>
                    <Col3 className="yuorCart"   align = "center" pd = "5px">
                    <Div  display = "flex" justify = "end" align = "center">
                        <LinkA mr= "0 15px" className="yuorLink">
                        <Div display = "flex" justify = "center" align = "center" flex = "column" >
                            <Icon.Like w = "18px" >
                            </Icon.Like>
                            <Count top = "-10px" right = "4px">2</Count>
                            <p>Your Wishlist</p>
                        </Div>


                        </LinkA>
                        <LinkA mr= "0 15px" className="yuorLink">
                        <Div display = "flex" justify = "center" align = "center" flex = "column" >
                            <Icon.Cart w = "18px" >
                            </Icon.Cart>
                            <Count top = "-10px" right = "4px">2</Count>
                            <p>Your Wishlist</p>
                        </Div>


                        </LinkA>
                    </Div>
                    </Col3>
                </Container>
            </DarkHeader>
            
        </HeaderStyle>
    )
}

export default TopHeader;