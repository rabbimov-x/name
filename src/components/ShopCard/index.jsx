import React from "react"
import {CardImg, ShopStyled, ShopTitle} from "./styled"
import {Icon} from "../../GlobalStyle"



const ShopCard = ()=>{
    return(
        <ShopStyled>
            <ShopTitle>
                <h1>Laptop</h1>
                <h1>Collection</h1>
                <a href="/shop_now">
                    SHOP NOW 
                    <Icon.Next w = "var(--icon-w18)" mr = "0 0 0 5px"></Icon.Next>
                </a>
            </ShopTitle>
            <CardImg src = "./assets/images/png/xshop.webp" alt="error"  />
            
        </ShopStyled>
    )
}

export default ShopCard;