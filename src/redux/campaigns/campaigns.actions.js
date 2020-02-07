import { CampaignActionTypes } from './campaigns.types'


export const createCampaign = campaign => ({
    type: CampaignActionTypes.CREATE_CAMPAIGN,
    payload: campaign
})

export const deleteCampaign = campaignId => ({
    type: CampaignActionTypes.DELETE_CAMPAIGN,
    payload: campaignId
}) 

export const editCampaign = campaign => ({
    type: CampaignActionTypes.EDIT_CAMPAIGN,
    payload: campaign
})

export const getCampaign = ids => ({
    type: CampaignActionTypes.GET_CAMPAIGN,
    payload: ids
})