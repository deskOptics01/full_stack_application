import { BUY_SHIRTS } from "./shirtsTypes"

const initialState= {
    numOfShirts: 10
}

const shirtsReducer= (state = initialState, action) => {
    switch(action.type){
        case BUY_SHIRTS: return {
            ...state,
            numOfShirts: state.numOfShirts-1
        }
        default: return state
    }
}
export default shirtsReducer