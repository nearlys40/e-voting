import { UserActionTypes } from './users.types'
import isEmpty from 'is-empty'

const INITIAL_STATE = {
    user: null,
    isAuthenticated: false,
    loading: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            }
        case UserActionTypes.LOGIN_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case UserActionTypes.LOGOUT_USER:
            return {
                ...state,
                isAuthenticated: false
            }
        case UserActionTypes.UPDATE_PROFILE:
            return {
                ...state,
                user: action.payload
            }
        case UserActionTypes.USER_LOADING:
            return {
                loading: true
            }
        default:
            return state
    }
}

export default userReducer