import React from "react";
import { Col3, Container, Icon } from "../../GlobalStyle";
import {FooterStyled, Ul} from "./styled"

const Footer = ({data})=>{
    return(
        <FooterStyled>
            <Container>
                {
                    data.map((value)=>{
                        return (
                    <Col3 key = {value.id}>
                        <Ul.H>
                            {value.title}
                        </Ul.H>
                        <Ul>
                            <Ul.Li>

                                <a href = "/lorem">
                                    {value.titleL1}
                                </a>
                            </Ul.Li>
                            <Ul.Li>
                                <a href="/lokation">
                                    <Icon.Location display = {value.icons} w= "var(--icon-w14)" color = "var(--cl-red)" mr = " 0 10px 0 0 ">
                                    </Icon.Location>
                                {value.titleL2}
                                </a>
                            </Ul.Li>
                            <Ul.Li>
                                <a href="+998993332529">
                                    <Icon.Phone display = {value.icons} w= "var(--icon-w14)" color = "var(--cl-red)" mr = " 0 10px 0 0 ">
                                    </Icon.Phone>
                                    {value.titleL3}
                                </a>
                            </Ul.Li>
                            <Ul.Li>
                                <a href="Email@email.com">
                                    <Icon.Email display = {value.icons} w= "var(--icon-w14)" color = "var(--cl-red)" mr = " 0 10px 0 0 ">
                                    </Icon.Email>
                                    {value.titleL4}
                                </a>
                            </Ul.Li>
                        </Ul>
                </Col3>
                        )
                    })
                }
            </Container>
        </FooterStyled>
    )
}

export default Footer;