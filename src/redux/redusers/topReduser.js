import { addcart } from "../type/types"

 const initialState = {
     summa: 0
 }


 export const TopReduser = (state = initialState , action) =>{
        if( action.type === addcart){
            const data = state
            data.summa = data.summa + action.cost;
            return {...state, ...data}
        } return state
 }