import React from 'react'
import PieChart from 'react-minimal-pie-chart'
import { Grid, Button, Container, Divider } from 'semantic-ui-react'
import CampaignStatusBar from '../../../components/campaign-status-bar/campaign-status-bar'
import './campaign.styles.scss'


let SmallBox = ({ mainColor, title, descrp, data, iconFile }) => {
    console.log('small box is called')
    return (
        <Container fluid style={{ marginBottom: "5px", height: '100%', padding: '5%', paddingTop: '6%', backgroundColor: "white", borderRadius: '7px' }}>
            <Grid style={{ marginLeft: '5%', marginRight: '3%' }}>
                <Grid.Row style={{ height: '40%', textAlign: 'left' }}>
                    <h3 style={{ color: mainColor, marginBottom: '0' }}>{title}</h3>
                    <p style={{ color: '#919090' }}>{descrp}</p>
                </Grid.Row>
                <Grid.Row style={{ height: '60%' }}>
                    <Grid.Column width={11}>
                        <h1 style={{ color: mainColor, textAlign: 'left' }}>{data}</h1>
                    </Grid.Column>
                    <Grid.Column width={5} style={{ padding: '1px' }}>
                        <img src={iconFile} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}



const Campaign = ({ attendee = 75, notAttend = 25, status = 'OPEN', openT = '10-01-20  12:00 AM', closeT = '12-01-20  17:00 PM' }) => {
    let allVoters = attendee + notAttend
    let attendPercent = attendee / allVoters
    let notAttendPercent = notAttend / allVoters
    let timeRemaining = '00 H : 30 M : 20 S'
    return (
        <div className='campaign-dashboard'>
            <div className='campaign-header'>
                <Grid style={{ width: '100%' }}>
                    <Grid.Row style={{ width: '100%' }}>
                        <Grid.Column width={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <span className='campaign-text'>Campaign Dashboard</span>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Button color='google plus'>
                                CLOSING BALLOT
                        </Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{ height: 'auto' }}>
                        <CampaignStatusBar cStatus={status} cOpeningT={openT} cCloseT={closeT} />
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={9} style={{ width: "100%", height: '100%' }}>
                            <Grid style={{ width: '100%', height: '100%' }}>
                                <Grid.Row height={6}>
                                    <Grid style={{ height: "100%" }}>
                                        <Grid.Column width={8}>
                                            <SmallBox mainColor='#4048a3' title='# Ballot Casted' descrp='Total number of voters participating in the campaign' data={attendee} iconFile={require('../../../assets/stat-blue.png')} />
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                            <SmallBox mainColor='#156351' title='# Eligible Voters' descrp="Total number of campaign's eligible voters" data={allVoters} iconFile={require('../../../assets/stat-green.png')} />
                                        </Grid.Column>
                                    </Grid>
                                </Grid.Row>
                                <Grid.Row height={1} style={{ padding: '0', margin: '0' }}>
                                </Grid.Row>
                                <Grid.Row height={9} style={{ padding: '0', margin: '0' }}>
                                    <Container fluid style={{ height: '100%', padding: '4%', backgroundColor: "white", borderRadius: '7px' }}>
                                        <Grid style={{ marginLeft: '4%' }}>
                                            <Grid.Row style={{ height: '10%', textAlign: 'left', display: 'block' }}>
                                                <h3 style={{ color: '#156351', marginBottom: '0' }}>Realtime Ballot Monitoring</h3>
                                                <p style={{ color: '#919090' }}>some description here.....</p>
                                            </Grid.Row>
                                            <Grid.Row style={{ height: '90%', padding: '0' }}>

                                            </Grid.Row>
                                        </Grid>
                                    </Container>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Container fluid style={{ padding: '5%', paddingTop: '6%', backgroundColor: "white", borderRadius: '7px' }}>
                                <Grid>
                                    <Grid.Row style={{ marginLeft: '5%' }}>
                                        <h3 style={{ marginBottom: '0' }}>Overall Statistics</h3>
                                        <p style={{ color: '#919090' }}>Overall Statistical Records of the Campaign</p>
                                    </Grid.Row>
                                    <Grid.Row style={{ marginTop: '5%' }}>
                                        <Grid.Column width={8}>
                                            <div className='piechart-container'>
                                                <PieChart
                                                    style={{ backgroundColor: "white" }}
                                                    className='pie'
                                                    animate={false}
                                                    animationDuration={500}
                                                    animationEasing="ease-out"
                                                    cx={50}
                                                    cy={50}
                                                    data={[
                                                        {
                                                            color: '#5075d9',
                                                            title: attendee,
                                                            value: attendee
                                                        },
                                                        {
                                                            color: '#FF0000',
                                                            title: notAttend,
                                                            value: notAttend
                                                        }
                                                    ]}

                                                    //แสดงตัวอักษร
                                                    label={false}
                                                    //ตำแหน่งที่แสดงตัวอักษร
                                                    labelPosition={50}
                                                    //วงกลมกี่องศา
                                                    lengthAngle={360}
                                                    //ความกว้างของเส้นกราฟ
                                                    lineWidth={50}
                                                    onClick={undefined}
                                                    onMouseOut={undefined}
                                                    onMouseOver={undefined}

                                                    //ระยะห่างระหว่างกราฟแต่ละเส้น
                                                    paddingAngle={0}
                                                    //รัศมีของวงกลม
                                                    radius={50}
                                                    rounded={false}
                                                    startAngle={0}
                                                    viewBoxSize={[
                                                        100,
                                                        100
                                                    ]}
                                                />
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={8} style={{ display: "flex", alignItems: "center" }}>
                                            <div>
                                                <div style={{ marginBottom: "5%" }}>
                                                    <h2 style={{ color: "#4c5cb5", display: "inline" }}>{attendPercent}%</h2><h4 style={{ color: "#4c5cb5", display: "inline" }}> attend</h4>
                                                </div>
                                                <div>
                                                    <h4 style={{ color: "#c22708", display: "inline" }}><h2 style={{ color: "#c22708", display: "inline" }}>{notAttendPercent}%</h2> not attend</h4>
                                                </div>
                                            </div>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row style={{ display: "flex", justifyContent: "center" }}>
                                        <div style={{ width: '90%', textAlign: 'center', backgroundColor: '#ffd469', padding: '10px', borderRadius: "10px", lineHeight: '1px' }}>
                                            <h4>Time Remaining</h4>
                                            <h2 style={{ marginTop: "2px" }}>{timeRemaining}</h2>
                                        </div>
                                    </Grid.Row>
                                </Grid>

                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    )
}

export default Campaign