import React from 'react'
import { withRouter } from 'react-router-dom'
import './campaign-management.styles.scss'
import { ReactComponent as CampaignImage } from '../../assets/crown.svg'

const CampaignManagementPage = ({ history }) => {
    const { name } = history.location.state
    return (
        <div className='campaign-management-container'>
            <div className='page-indicator'>
                <span className='back-to-dashboard-text'
                    onClick={() => history.push('/all-campaigns')}
                > Go Back to Dashboard </span> |
                <span className='campaign-name-text'>{ name }</span>
            </div>

            <div className='side-menu-container'>
                <div className='campaign-info'>
                    <div className='image-container'>
                        <CampaignImage />
                    </div>
                    <div className='text-container'>
                        <span>Campaign</span><br />
                        <span className='campaign-name'>{ name }</span>
                    </div>
                </div>
                <hr />
                <div className='campaign-menu'>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(CampaignManagementPage);