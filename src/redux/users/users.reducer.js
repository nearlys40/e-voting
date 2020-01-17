import { UserActionTypes } from './users.types'
import { isEmpty } from 'is-empty'

const INITIAL_STATE = {
    isAuthenticated: false,
    //test currentUser -> 'Test', {}, null
    currentUser: null,
    loading: false,
    errors: {}
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state, 
                isAuthenticated: !isEmpty(action.payload),
                currentUser: action.payload
            }
        case UserActionTypes.USER_LOADING:
            return {
                ...state,
                loading: true
            }
        case UserActionTypes.GET_ERRORS:
            // return action.payload
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state
    }
}

export default userReducer