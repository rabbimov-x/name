import {navbar} from "../../utils/navbar"
import {shopCard, productCard, SmoleCard} from "../../utils/Cards"
import {footer} from "../../utils/footer"
import {  updateState } from "../type/types"

const initialState = {  
    main : 0,
    may: ["astets" , "ckmdsjlk"],
    navbar: navbar,
    shopCard: shopCard,
    productCard: productCard,
    SmoleCard: SmoleCard,
    footer: footer,
    buttonClick: true,





}

export const homeReduser = (state = initialState, action)=>{
    if(action.type === updateState){
        console.log(action)
        state.buttonClick = !state.buttonClick
         
        return {...state , ...action};
    }
    else{
        return state
    }
    
 
}
