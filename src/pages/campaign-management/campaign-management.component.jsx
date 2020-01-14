import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import './campaign-management.styles.scss'


const CampaignManagementPage = ({ history }) => {
    const { name, imageUrl } = history.location.state
    const { SubMenu } = Menu

    return (
        <div className='campaign-management-container'>
            <div className='page-indicator'>
                <span className='back-to-dashboard-text'
                    onClick={() => history.push('/all-campaigns')}
                > Go Back to Dashboard </span> |
                <span className='campaign-name-text'>{name}</span>
            </div>
            <div>
                <div className='side-menu-container'>
                    <div className='campaign-info'>
                        <div className='image-container'>
                            <img className='profile' alt='profile' src={`${imageUrl}`} />
                        </div>
                        <div className='text-container'>
                            <span>Campaign</span><br />
                            <span className='campaign-name'>{name}</span>
                        </div>
                    </div>
                    <hr />
                    <div className='campaign-menu'>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <Menu.Item key="1">
                                <Icon type="idcard" />
                                <span>Campaign Management</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="smile" />
                                        <span>Users Management</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="2">
                                    <Icon type="user" />
                                    <span>Candidates</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="team" />
                                    <span>Voters</span>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </div>
                <div className='content-container'>

                </div>
            </div>
        </div>
    );
}
export default withRouter(CampaignManagementPage);