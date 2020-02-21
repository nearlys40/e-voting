import React from 'react'
import { Button, Icon } from 'antd'
import { Divider, Segment } from 'semantic-ui-react'

class CampaignEnd extends React.Component {

    handleClick = () => {
        alert('Download Clicked!!')
    }

    render() {
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
            </div>
        )
    }
}

export default CampaignEnd