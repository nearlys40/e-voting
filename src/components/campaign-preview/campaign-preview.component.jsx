import React from 'react'
import { Row, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import CAMPAIGNS_MOCKUP_DATA from '../../assets/campaigns'
import CampaignItem from '../campaign-item/campaign-item.component'
import './campaign-preview.styles.scss'

class CampaignPreview extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            campaigns: CAMPAIGNS_MOCKUP_DATA
        }
    }

    createNewCampaign = () => {
        this.props.history.push('/new-campaign')
    }

    render() {
        const { campaigns } = this.state
        console.log(campaigns)
        return (
            <div className='campaign-preview'>
                <Row className='preview'>
                    <div className='create-new-campaign-container'>
                        <div className='button-container'>
                            <Button
                                className='create-new-campaign-button'
                                icon="plus-circle"
                                onClick={() => this.createNewCampaign()}
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
                            ))
                    }
                </Row>
            </div>
        )
    }
}

export default withRouter(CampaignPreview)