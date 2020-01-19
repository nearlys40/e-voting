import { combineReducers } from 'redux'
import campaignReducer from './campaigns/campaigns.reducer'
import userReducer from './users/users.reducer'
import alertReducer from './alerts/alerts.reducer'

export default combineReducers({
    campaigns: campaignReducer,
    users: userReducer,
    alert: alertReducer
})