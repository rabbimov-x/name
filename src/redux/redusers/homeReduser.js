import {navbar} from "../../utils/navbar"
import {shopCard, productCard, SmoleCard} from "../../utils/Cards"
import {footer} from "../../utils/footer"

const initialState = {  
    main : 0,
    may: ["astets" , "ckmdsjlk"],
    navbar: navbar,
    shopCard: shopCard,
    productCard: productCard,
    SmoleCard: SmoleCard,
    footer: footer,



}

export const homeReduser = (state = initialState, action)=>{
 return state
}