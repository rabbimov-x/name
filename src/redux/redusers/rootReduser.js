import { combineReducers } from "redux";
import { homeReduser } from "./homeReduser";
 



export const  Rootreduser = combineReducers({
   home: homeReduser,
})