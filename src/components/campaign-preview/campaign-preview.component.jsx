import React from 'react'
import { Row, Button, Avatar, Card } from 'antd'
import { withRouter } from 'react-router-dom'
import CampaignItem from '../campaign-item/campaign-item.component'
import { Grid } from 'semantic-ui-react'
import './campaign-preview.styles.scss'
const { Meta } = Card;



const CampaignPreview = ({ campaigns, history }) => {
    return (
        <div className='campaign-preview'>
            <Grid columns={4} className='grid-style'>
                <Grid.Row>
                    {/* <Row className='preview'> */}

                    {/* <Grid.Column width={4} style={{ minWidth: '250px' ,display:'flex',justifyContent:'center'}}>
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
                </Grid.Column> */}

                    {
                        campaigns
                            .filter((campaign, index) => index < 4)
                            .map(({ id, ...otherProps }) => (
                                <Grid.Column width={4} className='grid-col-style'>
                                    <CampaignItem key={id} {...otherProps} />
                                </Grid.Column>
                            )
                            )
                    }

                    {/* </Row> */}
                </Grid.Row>
            </Grid>
        </div >
    )
}

export default withRouter(CampaignPreview)