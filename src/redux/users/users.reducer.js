import { UserActionTypes } from './users.types'
import isEmpty from 'is-empty'

const INITIAL_STATE = {
    currentUser: {},
    isAuth: false,
    loading: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.LOGIN_USER:
            return {
                ...state,
                isAuth: !isEmpty(action.payload),
                currentUser: action.payload
            }
        case UserActionTypes.LOGOUT_USER:
            return {}
        case UserActionTypes.UPDATE_PROFILE:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.USER_LOADING:
            return {
                loading: true
            }
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                isAuth: !isEmpty(action.payload),
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer