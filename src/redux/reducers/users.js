import { SET_USERS_INFO } from "../types";

const initialState = {
    info: {}
}

const usersReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_USERS_INFO:
            return {
                ...state,
                info: {
                    ...state.info,
                    ...action.payload
                }
            }
    
        default:
            return state
    }
}


export default usersReducer;