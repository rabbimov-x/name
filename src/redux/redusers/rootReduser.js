import { combineReducers } from "redux";
import { AddCard, homeReduser } from "./homeReduser";
 



export const  Rootreduser = combineReducers({
   home: homeReduser,
   addCard: AddCard,
})