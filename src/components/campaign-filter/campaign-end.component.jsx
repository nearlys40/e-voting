import React from 'react'
import { Button, Icon } from 'antd'
import { Divider, Segment } from 'semantic-ui-react'
import CandidateVoted from '../candidate-voted/candidate-voted.component'

class CampaignEnd extends React.Component {

    handleClick = () => {
        alert('Download Clicked!!')
    }

    totalVotes = (candidates) => {
        let totalVotes = 0
        candidates.map(candidate => totalVotes += candidate.extras.voted)
        return totalVotes
    }

    calculateRanking = (candidates) => {
        //do something
    }

    render() {
        //dummy data from blockchain
        //candidate 1
        const firstName_1 = 'Test1'
        const lastName_1 = 'Test1'
        const imageUrl_1 = 'https://i.ibb.co/bLB646Z/red-beanie.png'
        const votes_1 = 150
        const ranking_1 = '1st'

        //candidate 2
        const firstName_2 = 'Test2'
        const lastName_2 = 'Test2'
        const imageUrl_2 = 'https://i.ibb.co/bLB646Z/red-beanie.png'
        const votes_2 = 100
        const ranking_2 = '2nd'
        
        const totalVotes = votes_1 + votes_2

        return (
            <div className='election-results' style={{ width: '100%' }}>
                <Divider horizontal>Election Results</Divider>
                <Segment
                    className='download-results'
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px',
                        backgroundColor: 'white',
                        textAlign: 'center'
                    }}
                >
                    <span style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontStyle: 'bold'
                    }}>Election Result is available for download here</span>
                    <Button
                        className='download-file-button'
                        type='primary'
                        onClick={() => this.handleClick()}
                    >
                        <Icon type='download' />
                        <span>Download</span>
                    </Button>
                </Segment>
                <Segment>
                    <div className='candidates-header'>
                        <h2>Candidates</h2>
                        <h2 style={{ fontSize: '18px', marginTop: '2px' }}>Total Votes <strong>{totalVotes}</strong></h2>
                    </div>
                    <CandidateVoted
                        firstName={firstName_1}
                        lastName={lastName_1}
                        imageUrl={imageUrl_1}
                        votes={votes_1}
                        ranking={ranking_1}
                        totalVotes={totalVotes} />
                    <CandidateVoted
                        firstName={firstName_2}
                        lastName={lastName_2}
                        imageUrl={imageUrl_2}
                        votes={votes_2}
                        ranking={ranking_2}
                        totalVotes={totalVotes} />
                </Segment>
            </div>
        )
    }
}

export default CampaignEnd