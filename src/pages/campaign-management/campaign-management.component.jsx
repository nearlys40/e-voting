import React from 'react'
import './campaign-management.styles.scss'

const CampaignManagementPage = ({ name = 'Election 1' }) => {
    return (
        <div className='campaign-management-container'>
            <div className='page-indicator'>
                <span className='back-to-dashboard-text'> Go Back to Dashboard </span> |
                <span className='campaign-name-text'>{name}</span>
            </div>

            <div className='side-menu-container'>
                <div className='campaign-info'>
                    <div className='text-container'>
                        <h2>Campaign</h2> <br/>
                        <h2>Election 1</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CampaignManagementPage;