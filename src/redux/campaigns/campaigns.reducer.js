import { CampaignActionTypes } from './campaigns.types'
import { setCurrentUser } from '../users/users.actions'
import { getCampaignFetch, createCampaignFetch, editCampaignFetch, deleteCampaignFetch } from './campaigns.utils'

const INITIAL_STATE = {
    campaign: null
}

const campaignReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CampaignActionTypes.CREATE_CAMPAIGN:
            return setCurrentUser(createCampaignFetch(action.payload))
        case CampaignActionTypes.DELETE_CAMPAIGN:
            return setCurrentUser(deleteCampaignFetch(action.payload))
        case CampaignActionTypes.GET_CAMPAIGN:
            return {
                ...state,
                campaign: getCampaignFetch(action.payload)
            }
        case CampaignActionTypes.EDIT_CAMPAIGN:
            return {
                ...state,
                campaign: editCampaignFetch(state.campaigns, action.payload)
            }
        default:
            return state
    }
}

export default campaignReducer