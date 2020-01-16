import React from 'react'
import { Row, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import CampaignItem from '../campaign-item/campaign-item.component'
import './campaign-preview.styles.scss'

 const CampaignPreview = ({ campaigns, history, ...otherProps }) => {
        console.log(campaigns)

        return (
            <div className='campaign-preview'>
                <Row className='preview'>
                    <div className='create-new-campaign-container'>
                        <div className='button-container'>
                            <Button
                                className='create-new-campaign-button'
                                onClick={() => history.push('/new-campaign')}
                            />
                        </div>
                        <div className='text-container'>
                            <span className='create-new-campaign-text'>Create New Campaign</span>
                        </div>
                    </div>
                    {
                        campaigns
                            .filter((campaign, index) => index < 4)
                            .map(({ id, ...otherProps }) => (
                                <CampaignItem key={id} {...otherProps} />
                            )
                        )
                    }
                </Row>
            </div>
        )
    }

export default withRouter(CampaignPreview)