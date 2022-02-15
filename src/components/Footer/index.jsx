import React from "react";
import { Col3, Container, Icon } from "../../GlobalStyle";
import {FooterStyled, Ul} from "./styled"

const Footer = ()=>{
    return(
        <FooterStyled>
            <Container>
                <Col3>
                    <Ul.H>
                        About Us
                    </Ul.H>
                    <Ul>
                        <Ul.Li>

                            <a href = "/lorem">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Hic, veniam? Eos deserunt voluptates possimus dolorum laudantium 
                                ea totam molestiae rem odio!
                            </a>
                        </Ul.Li>
                        <Ul.Li>
                            <a href="/lokation">
                                <Icon.Location w= "var(--icon-w14)" color = "var(--cl-red)" mr = " 0 10px 0 0 ">
                                </Icon.Location>
                            1734 Stonecoal Road
                            </a>
                        </Ul.Li>
                        <Ul.Li>
                            <a href="+998993332529">
                                <Icon.Phone w= "var(--icon-w14)" color = "var(--cl-red)" mr = " 0 10px 0 0 ">
                                </Icon.Phone>
                                +998993332529
                            </a>
                        </Ul.Li>
                        <Ul.Li>
                            <a href="Email@email.com">
                                <Icon.Email w= "var(--icon-w14)" color = "var(--cl-red)" mr = " 0 10px 0 0 ">
                                </Icon.Email>
                                Email@email.com
                            </a>
                        </Ul.Li>
                    </Ul>
                </Col3>
            </Container>
        </FooterStyled>
    )
}

export default Footer;