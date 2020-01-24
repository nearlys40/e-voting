import React from 'react'
import { Menu, Icon } from 'antd'
import Campaign from './campaign/campaign.component'
import Candidates from './users/candidates.component'
import Voters from './users/voters.component'
import {  Grid , Menu, Icon, Dropdown, Image} from "semantic-ui-react";

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

    sideMenu = () => {
        const { activeItem } = this.state
        return (
        <Menu vertical style={{width:'27vw',maxWidth:'320px', marginLeft:'5%', marginRight:'5%'}}>
              <Menu.Item style={{height:'30%'}}> 
                <Grid columns={2} centered>
                  <Grid.Row>
                      <Grid.Column width={6}><Image src='https://cdn.pixabay.com/photo/2019/12/14/07/21/mountain-4694346_960_720.png' float circular /></Grid.Column>
                      <Grid.Column width={10} >
                        <Grid.Row style={{display: 'flex',alignItems:'flex-end',justifyContent:'center',height:'50%'}}>
                          <h4>Campaign</h4>
                        </Grid.Row>
                        <Grid.Row style={{display: 'flex',alignItems:'flex-start',justifyContent:'center',height:'50%'}}>
                          <h3>Something</h3>
                        </Grid.Row>
                      </Grid.Column>
                  </Grid.Row>
                </Grid>
           
              </Menu.Item>
      
        
      
              <Menu.Item
                name='campaignManagement'
                active={activeItem === 'campaignManagement'}
                onClick={this.handleItemClick}
              >
                <p><Icon name='cogs' style={{paddingRight:'2vw'}}/>Campaign Management</p>
              </Menu.Item>
      
            <Dropdown item text={<p><Icon name='users' style={{paddingRight:'2vw'}}/>Users Management</p>}>
                <Dropdown.Menu>
                  <Dropdown.Item icon='edit' text='Edit Profile' />
                  <Dropdown.Item icon='globe' text='Choose Language' />
                  <Dropdown.Item icon='settings' text='Account Settings' />
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
      )}



    render() {
        const { name, imageUrl, candidates, voters } = this.props.history.location.state
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
export default CampaignManagementPage