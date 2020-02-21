import React from 'react'
import { Button, Icon } from 'antd'
import Voter from '../voter/voter.component'
import { Segment, Dropdown } from 'semantic-ui-react'
import './total-voters.styles.scss'

class TotalVoters extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            caretIcon: 'up',
            display: 'flex'
        }
    }

    moreDetailsClick = () => {
        alert('more details clicked')
    }

    caretClick = () => {
        const caretIcon = this.state.caretIcon

        if (caretIcon === 'up') {
            this.setState({
                caretIcon: 'down',
                display: 'none'
            })
        } else if (caretIcon === 'down') {
            this.setState({
                caretIcon: 'up',
                display: 'flex'
            })
        }
    }

    render() {
        const voters = this.props.voters
        const displayStyles = {
            display: this.state.display
        }

        return (
            <Segment>
                <div className='voters-header'>
                    <h2 style={{ color: 'blue' }}>Voters</h2>
                    <Button
                        style={{ border: 'none' }}
                        size='large'
                        onClick={this.caretClick}
                    >
                        <Icon type={this.state.caretIcon} />
                    </Button>
                </div>
                <div className='voters-data' style={{
                    ...displayStyles
                }}>
                    <div className='filter-section'>
                        <span>Filtered by <strong>Class</strong></span>
                        <Dropdown
                            text='Filter'
                            icon='filter'
                            floating
                            labeled
                            button
                            className='icon'
                        >
                            <Dropdown.Menu>
                                <Dropdown.Header icon='tags' content='Filter by..' />
                                <Dropdown.Divider />
                                <Dropdown.Item
                                    label={{ color: 'red', empty: true, circular: true }}
                                    text='All'
                                />
                                <Dropdown.Item
                                    label={{ color: 'blue', empty: true, circular: true }}
                                    text='Class'
                                />
                                <Dropdown.Item
                                    label={{ color: 'black', empty: true, circular: true }}
                                    text='Gender'
                                />
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='voters-list'>
                        {
                            voters.map(voter => (
                                <Voter {...voter} />
                            ))
                        }
                    </div>
                    <Button
                        className='more-details-button'
                        type='primary'
                        onClick={this.moreDetailsClick}
                    >
                        <span>More Details..</span>
                        <Icon type='right' />
                    </Button>
                </div>
            </Segment>
        )
    }
}

export default TotalVoters