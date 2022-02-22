import {navbar} from "../../utils/navbar"
import {shopCard, productCard, SmoleCard} from "../../utils/Cards"
import {footer} from "../../utils/footer"
import {  addcart, deleteCt, updateState } from "../type/types"

const initialState = {  
    main : 0,
    may: ["astets" , "ckmdsjlk"],
    navbar: navbar,
    shopCard: shopCard,
    productCard: productCard,
    SmoleCard: SmoleCard,
    footer: footer,
    buttonClick: true,
    cart: true,
    yuorCart: false,
}

export const homeReduser = (state = initialState, action)=>{
    if(action.type === updateState){
        console.log(action)
        state.buttonClick = !state.buttonClick
        return {...state , ...action};
    } else  if(action.type === addcart || action.type === deleteCt){
                const data = state;
                data.cart = !data.cart;
                // console.log("cart ishlayabdi", data.cart)
                return {...state, ...data}
    } 
    else{
        return state
    } 
}

export const AddCard = (state = initialState, action)=>{
    if(action.type === addcart){
        let a = 0
        
        for(a = 0  ; a < state.productCard.length ; a++ ){
            // console.log("davaye")
            if(state.productCard[a].id === action.id){     
                state.productCard[a].addCart = true;
                state.productCard[a].soni = action.soni;
                state.summa = state.summa + action.cost; 
                // console.log(state.summa)
                return state
            }
        }
        return state;
    } else if(action.type === deleteCt){
        let a = 0 ;
        for( a = 0 ; a < state.productCard.length ; a++ ){
            if(state.productCard[a].id === action.id){
            
                state.productCard[a].addCart = false;
                state.productCard[a].soni = action.soni;

                // console.log(data[a].addCart)
                return state 
            }
        }
        return state;
    }
    return state
    
}
