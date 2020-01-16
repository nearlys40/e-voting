import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import Campaign from './campaign/campaign.component'
import Candidates from './users/candidates.component'
import Voters from './users/voters.component'
import './campaign-management.styles.scss'


class CampaignManagementPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showPage: '1'
        }
    }

    changeContent = (event) => {
        const pageNumber = event.key

        this.setState({
            showPage: pageNumber
        })
    }

    render() {
        const { name, createdOn, description, imageUrl, candidates, voters } = this.props.history.location.state
        const { SubMenu } = Menu
        const page = this.state.showPage
        let content

        if (page === '1') {
            content = <Campaign />
        } else if (page === '2') {
            content = <Candidates candidates={candidates} />
        } else if (page === '3') {
            content = <Voters voters={voters} />
        }

        return (
            <div className='campaign-management-container'>
                <div className='page-indicator'>
                    <span className='back-to-dashboard-text'
                        onClick={() => this.props.history.push('/all-campaigns')}
                    > Go Back to Dashboard </span> |
                <span className='campaign-name-text'>{name}</span>
                </div>
                <div className='block-container'>
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
                        <div className='campaign-menu'>
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                onClick={(event) => this.changeContent(event)}
                            >
                                <Menu.Item key="1"  >
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
                        { content }
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(CampaignManagementPage);