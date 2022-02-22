import { combineReducers } from "redux";
import { AddCard, homeReduser } from "./homeReduser";
import {TopReduser} from "./topReduser"
 



export const  Rootreduser = combineReducers({
   home: homeReduser,
   addCard: AddCard,
   top: TopReduser,
})