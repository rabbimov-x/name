import React from "react";
import {Div} from "../../GlobalStyle"
import {Product} from "../ProductCard/styled"
import {SmoleStyle,Style } from "./styled"


const SmoleCard = ({data}) =>{
    
    return(
        <SmoleStyle>
            <Style.Img>
                <img className="img" src={data.imgUrl} alt="error" />
            </Style.Img>
            <Div pd = "0 var(--mp15)">
            <Product.P mr = " 0  0 10px 0">
                   Category
                </Product.P>
                <Product.A>
                product name goes here
                </Product.A>
                <Product.H4 mr = " 10px  0 0px 0">
                  $980.00 
                  <del>
                      $990.00
                  </del>
                </Product.H4>
            </Div>
        </SmoleStyle>
    )
}

export default SmoleCard;