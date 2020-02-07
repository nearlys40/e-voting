import React, { Suspense } from 'react'
import { Card } from 'antd'
import { withRouter } from 'react-router-dom'
import CampaignItem from '../campaign-item/campaign-item.component'
import { Grid } from 'semantic-ui-react'
import './campaign-preview.styles.scss'
import { useTranslation } from 'react-i18next'
const { Meta } = Card;

const CpPreview = ({ campaigns, history }) => {
    const { t, i18n } = useTranslation()

    return (
        <div className='campaign-preview'>
            <Grid columns={4} className='grid-style'>
                <Grid.Row>
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
                </Grid.Row>
            </Grid>
        </div >
    )
}

const CampaignPreview = ({ id, campaigns }) => {
    return (
        <Suspense fallback='loading'>
            <CpPreview key={id} campaigns={campaigns} />
        </Suspense>
    )
}

export default withRouter(CampaignPreview)