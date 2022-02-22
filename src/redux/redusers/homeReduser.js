import {navbar} from "../../utils/navbar"
import {shopCard, productCard, SmoleCard} from "../../utils/Cards"
import {footer} from "../../utils/footer"
import {  addcart, updateState } from "../type/types"

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

export const AddCard = (state = initialState, action)=>{
    if(action.type === addcart){
        let a = 0 ;
        
        console.log(state.productCard);
        for( a = 0 ; a < state.productCard.length ; a++ ){
            if(state.productCard[a].id === action.id){
                const data = state;
                data.productCard[a].addCart = true;
                console.log(data.productCard[a].addCart)
                return {...state, ...data}
            }
        }
        return state;
    }
    return state
}
