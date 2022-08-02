import { BUY_PANTS } from "./pantsTypes"

const initialState= {
    numOfPants: 10
}

const pantsReducer= (state = initialState, action) => {
    switch(action.type){
        case BUY_PANTS: return {
            ...state,
            numOfPants: state.numOfPants-1
        }
        default: return state
    }
}
export default pantsReducer