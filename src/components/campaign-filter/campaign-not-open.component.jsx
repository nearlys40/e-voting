import React from 'react'
import CampaignDescription from '../campaign-description/campaign-description.component'
import TotalCandidates from '../total-candidates/total-candidates.component'
import TotalVoters from '../total-voters/total-voters.component'

const CampaignNotOpen = ({ imageUrl, description, candidates, voters }) => {
    const numbers = candidates.length

    return (
        <div>
            <CampaignDescription imageUrl={imageUrl} description={description} />
            <TotalCandidates numbers={numbers} candidates={candidates} />
            <TotalVoters voters={voters} />
        </div>
    )
}

export default CampaignNotOpen