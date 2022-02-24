import React from "react";
import ProductCard from "../../components/ProductCard";
import { Container , Col3, H1 ,  } from "../../GlobalStyle";
import { ProductsStyle } from "./style";
import { useSelector } from "react-redux";
const AllProducts = ()=>{
    const state = useSelector((state)=>state.home)
    return (
        <ProductsStyle>
            <Container>
                <H1 color  = "var(--cl-dark-grey)" size = "var(--size30)" mr= "30px auto" bold = "800">
                    All Products
                </H1>
            </Container>
            <Container>
                {
                    state.productCard.map((value)=>{
                        return (
                            <Col3 key = {value.id}>
                                <ProductCard data = {value} ></ProductCard>
                            </Col3>
                        )
                    })
                }
            </Container>
        </ProductsStyle>
    )
}

export default AllProducts