import {configureStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const store = configureStore(rootReducer, applyMiddleware(logger))
export default store