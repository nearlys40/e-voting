import React from 'react'
import { Segment, Image, Grid } from 'semantic-ui-react'
import './campaign-description.styles.scss'

const CampaignDescription = ({ imageUrl, description }) => {
    return (
        <Segment className='campaign-description'>
            <Grid columns={2}>
                <Grid.Column width={3}>
                    <Image src={imageUrl} size='small' />
                </Grid.Column>
                <Grid.Column width={9}>
                    <h2 className='description-header'>Description</h2>
                    <p>
                        Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
                        facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
                        referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                        electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
                        ex natum rebum iisque.
                    </p>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default CampaignDescription