import React from 'react'
import CampaignPreview from '../../components/campaign-preview/campaign-preview.component'
import { Input } from 'antd'
import './all-campaigns.styles.scss'

 const AllCampaignsPage = () => {
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
                <CampaignPreview />
            </div>
        );
    }

export default AllCampaignsPage