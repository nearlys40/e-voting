import { combineReducers } from 'redux'
import campaignReducer from './campaigns/campaigns.reducer'
import userReducer from './users/users.reducer'
import candidateReducer from './candidates/candidates.reducer'

export default combineReducers({
    campaigns: campaignReducer,
    users: userReducer,
    candidates: candidateReducer
})