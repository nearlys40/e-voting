import React from 'react'
import { Grid, Container } from 'semantic-ui-react'

const SmallBox = ({ mainColor, title, descrp, data, iconFile }) => {
    return (
        <Container fluid style={{ marginBottom: "5px", height: '100%', padding: '5%', paddingTop: '6%', backgroundColor: "white", borderRadius: '7px' }}>
            <Grid style={{ marginLeft: '5%', marginRight: '3%' }}>
                <Grid.Row style={{ height: '40%', textAlign: 'left' }}>
                    <h3 style={{ color: mainColor, marginBottom: '0' }}>{title}</h3>
                    <p style={{ color: '#919090' }}>{descrp}</p>
                </Grid.Row>
                <Grid.Row style={{ height: '60%' }}>
                    <Grid.Column width={11}>
                        <h1 style={{ color: mainColor, textAlign: 'left' }}>{data}</h1>
                    </Grid.Column>
                    <Grid.Column width={5} style={{ padding: '1px' }}>
                        <img src={iconFile} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default SmallBox