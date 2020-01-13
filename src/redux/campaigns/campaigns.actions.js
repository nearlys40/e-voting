import { CampaignActionTypes } from './campaigns.types'

export const createNewCampaign = newCampaign => ({
    type: CampaignActionTypes.CREATE_NEW_CAMPAIGN,
    payload: newCampaign
})

export const deleteCampaign = campaignId => ({
    type: CampaignActionTypes.DELETE_CAMPAIGN,
    payload: campaignId
}) 