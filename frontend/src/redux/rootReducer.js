import {combineReducers} from 'redux'
import pantsReducer from './pants/pantsReducer'
import shirtsReducer from './shirts/shirtsReducer'
import { createStore } from 'redux'
import { buyPants } from './pants/pantsActions'
import { buyShirts } from './shirts/shirtActions'

const rootReducer = combineReducers({
    pants: pantsReducer,
    shirts: shirtsReducer
})
export default rootReducer

const store = createStore(rootReducer)
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dipatch(buyPants())
store.dispatch(buyShirts())
unsubscribe()