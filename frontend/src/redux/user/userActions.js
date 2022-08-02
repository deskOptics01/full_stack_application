import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "thunk"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

//middleware
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
//middleware

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
   return {
     type: FETCH_USERS_SUCCESS,
     payload: users
}
}

export const fetchUsersFailure = error => {
    return {
    type: FETCH_USERS_FAILURE,
    payload: error
}
}
 const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
              ...state,
              loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
            loading: false,
            users: action.payload,
            error: ''
    }
        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                users: [],
                error: action.payload
            }
              default: return state}
}

//action creator w/ middleware
const fetchUsers= () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        . then(response => {
            const users = response.data.map(users = users.id)
            dispatch(fetchUsersSuccess(users))
        })
        . catch (error => {
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}

//


 const store = createStore(reducer, composeWithDevTools, applyMiddleware(logger, thunk))
 store.subscribe(() => {
    console.log(store.getState())
 })
 store.dispatch(fetchUsers())