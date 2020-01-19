import { AlertActionTypes } from './alerts.types'

const INITIAL_STATE = {
    message: null
}

const alertReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AlertActionTypes.SUCCESS:
            return {
                type: 'alert-success',
                message: action.payload
            }
        case AlertActionTypes.ERROR:
            return {
                type: 'alert-danger',
                message: action.payload
            }
        case AlertActionTypes.CLEAR:
            return {}
        default:
            return state
    }
}

export default alertReducer