import { CampaignActionTypes } from './campaigns.types'
import { createCampaign, deleteCampaign } from './campaigns.utils'

const INITIAL_STATE = {
    campaigns: []
}

const campaignReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CampaignActionTypes.CREATE_NEW_CAMPAIGN:
            return {
                ...state,
                campaigns: createCampaign(state.campaigns, action.payload)
            }
        case CampaignActionTypes.DELETE_CAMPAIGN:
            return {
                ...state,
                campaigns: deleteCampaign(state.campaigns, action.payload)
            }
        default:
            return state
    }
}

export default campaignReducer