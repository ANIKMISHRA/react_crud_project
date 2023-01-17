import { LOGIN_USER, REGISTER_USER } from "./constants";

const initialState = {
    users: [],
    user: null,
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_USER: 
            return {
                ...state,
                users: [...state.users, action?.payload],
            }
        case LOGIN_USER:
            return {
                ...state,
                user: action?.payload?.loggedInUser,
            }    
            default :
            return state;
    }
}
export default reducers;