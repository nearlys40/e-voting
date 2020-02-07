import { AlertActionTypes } from './alerts.types'

export const alertSuccess = message => ({
    type: AlertActionTypes.SUCCESS,
    payload: message
})

export const alertError = message => ({
    type: AlertActionTypes.ERROR,
    payload: message
})

export const alertClear = () => ({
    type: AlertActionTypes.CLEAR
})