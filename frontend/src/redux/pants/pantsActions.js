import { BUY_PANTS } from "./pantsTypes";

export const buyPants = (number = 1) =>{
return{
    type: 'BUY_PANTS',
    payload: number
}
}