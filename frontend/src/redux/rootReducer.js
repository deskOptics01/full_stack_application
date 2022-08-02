import {combineReducers} from 'redux'
import pantsReducer from './pants/pantsReducer'
import shirtsReducer from './shirts/shirtsReducer'

const rootReducer = combineReducers({
    pants: pantsReducer,
    shirts: shirtsReducer
})
export default rootReducer