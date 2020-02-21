import React from 'react'
import { Button, Icon } from 'antd'
import { Segment } from 'semantic-ui-react'
import { goToPage } from '../../redux/campaigns/campaigns.actions'
import { connect } from 'react-redux'
import './total-candidates.styles.scss'

class TotalCandidates extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            caretIcon: 'up',
            display: 'flex'
        }
    }

    moreDetailsClick = () => {
        this.props.goToPage('2')
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
        const { numbers } = this.props
        const displayStyles = {
            display: this.state.display
        }

        return (
            <Segment>
                <div className='candidates-header'>
                    <h2 style={{ color: 'blue' }}>Candidates</h2>
                    <Button
                        style={{ border: 'none' }}
                        size='large'
                        onClick={this.caretClick}
                    >
                        <Icon type={this.state.caretIcon} />
                    </Button>
                </div>
                <div className='candidates-data' style={{ 
                    ...displayStyles
                 }}>
                    <h3>Total {numbers} candidates</h3>
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

const mapDispatchToProps = dispatch => ({
    goToPage: pageNumber => dispatch(goToPage(pageNumber))
})

export default connect(null, mapDispatchToProps)(TotalCandidates)