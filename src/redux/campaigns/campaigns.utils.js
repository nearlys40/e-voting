export const createCampaign = (campaigns, newCampaign) => {
    return [...campaigns, ...newCampaign]
}

export const deleteCampaign = (campaigns, deleteId) => {
    return campaigns.filter(campaign => 
        campaign.id !== deleteId
    )
}