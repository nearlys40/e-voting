import { UserActionTypes } from './users.types'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const loginUser = user => ({
    type: UserActionTypes.LOGIN_USER,
    payload: user
})