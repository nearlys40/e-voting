import React from 'react'
import './candidate.voted-styles.scss'
import { Grid, Progress } from 'semantic-ui-react'

const CandidateVoted = ({ imageUrl, firstName, lastName, votes, ranking, totalVotes }) => {
    const fullName = firstName + ' ' + lastName
    const percent = votes / totalVotes * 100

    return (
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column width={3}>
                    <img
                        alt='candidates'
                        src={`${imageUrl}`}
                        style={{
                            height: '100px',
                            width: '100px',
                            borderRadius: '50%',
                            marginLeft: '10px',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    />
                </Grid.Column>
                <Grid.Column width={13}>
                    <Grid.Row>
                        <span><strong>{ ranking }</strong> : </span>
                        <span>{ fullName } </span>
                    </Grid.Row>
                    <Grid.Row>
                        <div
                            style={{
                                display: 'flex'
                            }}
                        >
                            <Progress
                                progress
                                percent={percent}
                                color='blue'
                                style={{
                                    width: '80%',
                                    margin: '10px 10px 10px 0px'
                                }}
                            />
                            <span
                                style={{
                                    width: '20%',
                                    padding: '10px',
                                    textAlign: 'center'
                                }}
                            >{ votes } votes</span>
                        </div>
                    </Grid.Row>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default CandidateVoted