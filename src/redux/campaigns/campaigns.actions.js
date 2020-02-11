import { CampaignActionTypes } from './campaigns.types'


export const createCampaign = campaign => ({
    type: CampaignActionTypes.CREATE_CAMPAIGN,
    payload: campaign
})

export const deleteCampaign = id => ({
    type: CampaignActionTypes.DELETE_CAMPAIGN,
    payload: id
}) 

export const editCampaign = campaign => ({
    type: CampaignActionTypes.EDIT_CAMPAIGN,
    payload: campaign
})

export const getCampaign = id => ({
    type: CampaignActionTypes.GET_CAMPAIGN,
    payload: id
})