import { UserActionTypes } from './users.types'
import { isEmpty } from 'is-empty'

const INITIAL_STATE = {
    user: null,
    isAuthenticated: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state, 
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case UserActionTypes.LOGIN_USER:
            return {
                ...state, 
                user: action.payload
            }
        default:
            return state
    }
}

export default userReducer