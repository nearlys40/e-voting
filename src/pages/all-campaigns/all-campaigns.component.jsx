import React from 'react'
import CampaignPreview from '../../components/campaign-preview/campaign-preview.component'
import { connect } from 'react-redux'
import isEmpty from 'is-empty'
import { Input } from 'antd'
import './all-campaigns.styles.scss'


class AllCampaignsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: []
        }
    }

    componentDidMount() {
        this.setState({ 
            user: this.props.user
        })
    }

    render() {
        const { Search } = Input

        return (
            <div className='campaigns-container'>
                <div className='page-indicator'>
                    <span className='dashboard-text'>Dashboard</span>|
                <span className='all-campaigns-text'>All Campaigns</span>
                </div>
                <div className='search-campaign'>
                    <Search
                        className='search'
                        placeholder="Search Campaign..."
                        onSearch={value => alert(value)}
                        enterButton
                    />
                </div>
                {
                   !isEmpty(this.state.user) &&
                    (<CampaignPreview
                        key={this.state.user.id}
                        campaigns={this.state.user.campaigns}
                    />)
                }
            </div>
        );
    }
}

const mapStateToProps = ({ users: { user }}) => ({
    user
})

export default connect(mapStateToProps)(AllCampaignsPage)