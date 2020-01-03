import React from 'react'
import { Button } from 'antd'
import './create-new-campaign.styles.scss'

const CreateNewCampaign = () => {
    return (
        <div className='create-new-campaign-container'>
            <div className='button-container'>
                <Button
                    className='create-new-campaign-button'
                    icon="plus-circle"
                    onClick={() => alert('Create New Campaign!!')}
                />
            </div>
            <div className='text-container'>
                <span className='create-new-campaign-text'>Create New Campaign</span>
            </div>
        </div>
    )
}

export default CreateNewCampaign