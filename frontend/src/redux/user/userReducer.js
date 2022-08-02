import { buyPants } from "../pants/pantsActions"
import reducer from "../userReducer"
import { buyShirts } from "../shirts/shirtActions"

const initialState = {
    loading: false,
    users: [],
    error: ''
}

