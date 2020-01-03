import React from 'react'
import { Row } from 'antd'
import CreateNewCampaign from '../create-new-campaign/create-new-campaign.component'
import DUMMY_DATA from '../../assets/dummy-data'
import CampaignItem from '../campaign-item/campaign-item.component'
import './campaign-preview.styles.scss'

class CampaignPreview extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            campaigns: DUMMY_DATA
        }
    }

    render() {
        const { campaigns } = this.state
        console.log(campaigns)
        return (
            <div className='campaign-preview'>
                <Row className='preview'>
                    <CreateNewCampaign />
                    {
                        campaigns
                            .filter((campaign, index) => index < 4)
                            .map(({ id, ...otherProps }) => (
                                <CampaignItem key={id} {...otherProps} />
                            ))
                    }
                </Row>
            </div>
        )
    }
}

export default CampaignPreview