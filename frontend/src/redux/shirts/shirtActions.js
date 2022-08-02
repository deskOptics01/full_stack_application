import { BUY_SHIRTS } from "./shirtsTypes";

export const buyShirts = (number = 1) =>{
    return{
        type: 'BUY_SHIRTS',
        payload: number
    }
    }