import React from "react";
import { Div, Icon } from "../../GlobalStyle"
import {ProductSyled, Product} from "./styled"

const ProductCard = ()=>{
    return(
        <ProductSyled>
            <Product.Img>
                <img src="./assets/images/png/xshop.webp" alt="error" />
            </Product.Img>
            <Product.Body>
                <Product.P>
                   Category
                </Product.P>
                <Product.A>
                product name goes here
                </Product.A>
                <Product.H4>
                  $980.00 
                  <del>
                      $990.00
                  </del>
                </Product.H4>
                <Div display = "flex" justify = "center" align = "center" mr = "15px 0" >
                    <Product.Star/>
                    <Icon.Star color = "var(--cl-red)" />
                    <Icon.Star color = "var(--cl-red)" />
                    <Icon.Star color = "var(--cl-red)" />
                    <Icon.Star color = "var(--cl-red)" />
                    <Icon.Star color = "var(--cl-red)" />
                    <Product.Star/>
                </Div>
                <Div display = "flex" justify = "center" align = "center">
                    <Product.Btn>
                        <Product.Btnin className = "add"><p className="addP">Add to card</p></Product.Btnin>
                        <Icon.Like w = "var(--icon-w18)" color = "var(--cl-black)"  />
                    </Product.Btn>
                    <Product.Btn>
                    <Product.Btnin className = "add"><p className="addP">Add to card</p></Product.Btnin>
                        <Icon.Exchange w = "var(--icon-w18)" color = "var(--cl-black)" />
                    </Product.Btn>
                    <Product.Btn>
                    <Product.Btnin className = "add"><p className="addP">Add to card</p></Product.Btnin>
                        <Icon.View w = "var(--icon-w18)"
                         color = "var(--cl-black)" />
                    </Product.Btn>
                    
                </Div>
            </Product.Body>
            <Product.Footer className = "footer">
                <button className="add-to-cart-btn" type = "button">
                    <Icon.Cart color = "var(--cl-red)" w= "var(--icon-w18)" className = "AddIcon"  mr = "0 25px 0 0px" />
                    Add to Card</button>
            </Product.Footer>
        </ProductSyled>
    )
}

export default ProductCard;