import { CampaignActionTypes } from './campaigns.types'

const INITIAL_STATE = {
    campaign: null,
    showPage: null
}

const campaignReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CampaignActionTypes.CREATE_CAMPAIGN:
            return {
                ...state,
                campaign: action.payload
            }
        case CampaignActionTypes.DELETE_CAMPAIGN:
            return {
                ...state,
                campaign: action.payload
            }
        case CampaignActionTypes.GET_CAMPAIGN:
            return {
                ...state,
                campaign: action.payload
            }
        case CampaignActionTypes.EDIT_CAMPAIGN:
            return {
                ...state,
                campaign: action.payload
            }
        case CampaignActionTypes.GO_TO_PAGE:
            return {
                ...state,
                showPage: action.payload
            }
        default:
            return state
    }
}

export default campaignReducer