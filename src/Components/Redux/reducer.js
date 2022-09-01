import { ADD_FETCH } from "./action";

export const reducer=(store,{type,payload})=>{
switch (type) {
    case ADD_FETCH:
        
        return {...store,todo:[...payload]}

    default:
        return store
}
}