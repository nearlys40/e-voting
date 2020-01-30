import React from 'react'
import { Menu,Icon,Button} from 'antd'
import Campaign from './campaign/campaign.component'
import Candidates from './users/candidates.component'
import Voters from './users/voters.component'
import {
    Grid,
    Dropdown, Image, GridColumn, GridRow, Responsive
} from "semantic-ui-react";


import './campaign-management.styles.scss'


class CampaignManagementPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showPage: '1',
            collapsed: true
        }
    }

    changeContent = (event) => {
        const pageNumber = event.key

        this.setState({
            showPage: pageNumber
        })
    }




    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    // sideMenu = () => {
    //     const { activeItem } = this.state
    //     return (
    //         <surMenu vertical style={{ width: '27vw', maxWidth: '320px', marginLeft: '5%', marginRight: '5%' }}>
    //             <surMenu.Item style={{ height: '30%' }}>
    //                 <Grid columns={2} centered>
    //                     <Grid.Row>
    //                         <Grid.Column width={6}><Image src='https://cdn.pixabay.com/photo/2019/12/14/07/21/mountain-4694346_960_720.png' float circular /></Grid.Column>
    //                         <Grid.Column width={9} >
    //                             <Grid.Row className='campaign-title'>
    //                                 <h4>Campaign</h4>
    //                             </Grid.Row>
    //                             <Grid.Row className='campaign-name'>
    //                                 <h3>Something</h3>
    //                             </Grid.Row>
    //                         </Grid.Column>
    //                     </Grid.Row>
    //                 </Grid>
    //             </surMenu.Item>

    //             <surMenu.Item
    //                 name='campaignManagement'
    //                 active={activeItem === 'campaignManagement'}
    //                 onClick={this.handleItemClick}
    //             >
    //                 <p><surIcon name='cogs' style={{ paddingRight: '2vw' }} />Campaign Management</p>
    //             </surMenu.Item>

    //             <Dropdown item text={<p><surIcon name='users' style={{ paddingRight: '2vw' }} />Users Management</p>}>
    //                 <Dropdown.Menu>
    //                     <Dropdown.Item icon='edit' text='Edit Profile' />
    //                     <Dropdown.Item icon='globe' text='Choose Language' />
    //                     <Dropdown.Item icon='settings' text='Account Settings' />
    //                 </Dropdown.Menu>
    //             </Dropdown>
    //         </surMenu>
    //     )
    // }

 sideMenuCollapse = () => {
    const { SubMenu } = Menu;
    return(
    <div style={{ width: 230, marginTop:'10px',zIndex:100, position:'absolute' }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={[this.state.showPage]}
          onClick={(event) => this.changeContent(event)}
          mode="inline"
          style={{backgroundColor:'#9dd5ed', borderRadius:'5px'}}
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" >
            <Icon type="idcard" />
            <span>Campaign Management</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="team" />
                <span>User Management</span>
              </span>
            }
          >
            <Menu.Item key="2">Candidates</Menu.Item>
            <Menu.Item key="3">Voters</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
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
                <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
                    {this.sideMenuCollapse()}
                </Responsive>
                {/* <div className='block-container'> */}
                <Responsive minWidth={Responsive.onlyComputer.minWidth}>
                <Grid columns={3} className='menu-grid'>
                    
                    <Grid.Row>
                    
                        <Grid.Column width={4} className='side-menu-grid'>
                            <div className='menu-container'>
                                {/* <div className='side-menu-container'> */}
                                <div className='campaign-info'>
                                    <Grid Columns={2}>
                                        <Grid.Row style={{ marginTop: '5%', marginBottom: '5%' }}>
                                            <Grid.Column width={6} className='image-grid' >
                                                {/* <div className='image-container'> */}
                                                {/* <Image src={`${imageUrl}`} centered fluid style={{padding:'2%', borderRadius:"50%"}} /> */}
                                                <img className='profile' alt='profile' src={`${imageUrl}`} />
                                                {/* </div> */}
                                            </Grid.Column>
                                            <Grid.Column width={10}>
                                                <div className='text-container'>
                                                    <h4 style={{ marginBottom: 0, textAlign: "center" }}>campaign</h4><br />
                                                    <h3 style={{ marginTop: 0, textAlign: "center" }}>{name}</h3>
                                                </div>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </div>
                                <div className='campaign-menu'>
                                    <Menu
                                        defaultSelectedKeys={[this.state.showPage]}
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
                                                    <span>User Management</span>
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
                                {/* </div>  */}
                            </div>
                        </Grid.Column>
                       
                        <Grid.Column width={12} style={{paddingLeft:'1%'}}>
                        
                            <div className='content-container'>
                                {content}
                            </div>
                        </Grid.Column>
               
                    </Grid.Row>
                </Grid>
                </Responsive>
                <Responsive maxWidth={Responsive.onlyTablet.maxWidth} style={{zIndex:90, position:'relative'}}>
                {/* <div className='content-container2'> */}
                <Grid>
                <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={14} style={{marginTop:'20px'}}>
                                {content}
                    </Grid.Column>
                <Grid.Column width={1}></Grid.Column>
                </Grid>
                            {/* </div> */}
                </Responsive>
                
                {/* </div> */}
            </div>
        );
    }
}
export default CampaignManagementPage