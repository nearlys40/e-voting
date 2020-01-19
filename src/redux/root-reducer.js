import { combineReducers } from 'redux'
import campaignReducer from './campaigns/campaigns.reducer'
import userReducer from './users/users.reducer'
import alertReducer from './alerts/alerts.reducer'

export default combineReducers({
    campaign: campaignReducer,
    user: userReducer,
    alert: alertReducer
})