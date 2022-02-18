import React from "react"
import {CardImg, ShopStyled, ShopTitle} from "./styled"
import {Icon} from "../../GlobalStyle"



const ShopCard = ({data})=>{
    console.log(data)
    return(
        <ShopStyled>
            <ShopTitle>
                <h1>Laptop Collection</h1>
                <a href="/shop_now">
                    SHOP NOW 
                    <Icon.Next w = "var(--icon-w18)" mr = "0 0 0 5px"></Icon.Next>
                </a>
            </ShopTitle>
            <CardImg src = {data.imgUrl} alt="error"  />
            
        </ShopStyled>
    )
}

export default ShopCard;