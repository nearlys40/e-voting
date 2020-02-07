import { UserActionTypes } from './users.types'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const updateProfile = user => ({
    type: UserActionTypes.EDIT_USER_PROFILE,
    payload: user
})

export const loginUser = user => ({
    type: UserActionTypes.LOGIN_USER,
    payload: user
})

export const logoutUser = () => ({
    type: UserActionTypes.LOGOUT_USER
})

export const setUserLoading = () => ({
    type: UserActionTypes.USER_LOADING
})