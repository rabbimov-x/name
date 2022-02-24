import React from "react";
import ProductCard from "../../components/ProductCard";
import { Container , Col3, H1  } from "../../GlobalStyle";
import { useSelector } from "react-redux";
import { YourStyle } from "./style";
// import { updateState } from "../../redux/type/types";

        
const YourProduct = ()=>{
    const state = useSelector((state)=>state.home)
   
   
    return(
        <YourStyle>
            <Container>
                <H1 color  = "var(--cl-dark-grey)" size = "var(--size30)" mr= "30px auto" bold = "800">
                    Your Products
                </H1>
            </Container>
            <Container pd = " 0 0 60px    0" >
                {
                    state.productCard.map((value)=>{
                                
                        if(value.addCart === true){
                         return  (
                             
                            <Col3 key = {value.id} >
                                <ProductCard data = {value} ></ProductCard>
                            </Col3>
                        )
                        } else{
                         
                         return ""
                        }     
                     })
                }
                
            </Container>
        </YourStyle>
    )
}
export default YourProduct;