import React from 'react'
import CampaignPreview from '../../components/campaign-preview/campaign-preview.component'
import USERS_MOCKUP_DATA from '../../assets/users'
import { Input } from 'antd'
import './all-campaigns.styles.scss'

class AllCampaignsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: USERS_MOCKUP_DATA
        }
    }

    render() {
        const { Search } = Input
        const { users } = this.state

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
                    users.filter(
                        (user) => user.id === "1").map(({ id, campaigns, ...otherProps }) => (
                            <CampaignPreview key={id} campaigns={campaigns} {...otherProps} />
                        )
                    )
                }
            </div>
        );
    }
}

export default AllCampaignsPage