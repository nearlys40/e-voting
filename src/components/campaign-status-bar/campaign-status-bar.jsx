import React from 'react'
import { Grid, Container } from 'semantic-ui-react'




const CampaignStatusBar = ({ cStatus, cOpeningT, cCloseT }) => {
    return (
        <Grid style={{ height: '100%', width: '100%' }}>
            <Grid.Column width={5}>
                <Container fluid style={{ textAlign: 'center', backgroundColor: '#ffd469', padding: '10px', marginRight: '15px' }}>
                    <h3>STATUS :    <span style={{ color: 'red' }}>{cStatus}</span></h3>
                </Container>
            </Grid.Column>
            <Grid.Column width={11}>
                <Container fluid style={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: '100%', width: "100%", backgroundColor: '#e8e2d3', padding: '10px', marginRight: '5px' }}>
                    <Grid style={{ height: '100%', width: "100%" }}>
                        <Grid.Row style={{ padding: '0', margin: '0', display: 'flex', justifyContent: "center", height: '100%' }}>
                            <Grid.Column width={8}>
                                <p style={{ color: '#1e4394' }}>Opening: {cOpeningT}</p>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <p style={{ color: '#e03400' }}>Closing: {cCloseT}</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Grid.Column>
        </Grid>
    )
}


export default CampaignStatusBar
