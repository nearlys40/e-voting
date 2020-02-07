import React from 'react'
import PieChart from 'react-minimal-pie-chart'
import CampaignEnd from '../../../components/campaign-filter/campaign-end.component' 
import CampaignNotOpen from '../../../components/campaign-filter/campaign-not-open.component' 
import CampaignOpen from '../../../components/campaign-filter/campaign-open.component' 
import { Grid, Button, Container, Divider } from 'semantic-ui-react'
import SmallBox from '../../../components/small-box/small-box.component'
import CampaignStatusBar from '../../../components/campaign-status-bar/campaign-status-bar'
import './campaign.styles.scss'

const initialStatus = 'NOT OPEN'

const setDateTime = (date, str) => {
    const sp = str.split(':');
    date.setHours(parseInt(sp[0], 10));
    date.setMinutes(parseInt(sp[1], 10));
    date.setSeconds(parseInt(sp[2], 10));

    return date;
}

const getStatusByTime = (openTime, closeTime) => {
    const current = new Date();
    const c = current.getTime()
    const start = setDateTime(new Date(current), openTime)
    const end = setDateTime(new Date(current), closeTime)

    if (c < start.getTime())
        return 'NOT OPEN'
    else if (start.getTime() <= c && c <= end.getTime())
        return 'OPEN'
    else if (end.getTime() > c)
        return 'END'
}

const Campaign = ({ attendee = 75,
    notAttend = 25,
    status = initialStatus,
    openT = '10-01-20  12:00 AM', //need format HH:mm:SS
    closeT = '12-01-20  17:00 PM' //need format HH:mm:SS
}) => {
    let allVoters = attendee + notAttend
    let attendPercent = attendee / allVoters
    let notAttendPercent = notAttend / allVoters
    let timeRemaining = '00 H : 30 M : 20 S' //need format HH:mm:SS

    let dummyOpenTime = '15:00:00'
    let dummyCloseTime = '19:00:00'
    status = getStatusByTime(dummyOpenTime, dummyCloseTime)

    let content

    if (status === 'OPEN') {
        content = <CampaignOpen />
    } else if (status === 'END') {
        content = <CampaignEnd />
    } else if (status === 'NOT OPEN') {
        content = <CampaignNotOpen />
    }   

    return (
        <div className='campaign-dashboard'>
            <Grid style={{ width: '100%' }}>
                <div className='campaign-header'>
                    <Grid.Row style={{ width: '100%' }}>
                        <Grid style={{ width: '100%', height: '100%' }}>
                            <Grid.Column width={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <span className='campaign-text'>Campaign Dashboard</span>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Button color='google plus'>
                                    CLOSING BALLOT
                        </Button>
                            </Grid.Column>
                        </Grid>
                    </Grid.Row>
                </div>
                <Grid.Row style={{ height: 'auto' }}>
                    <CampaignStatusBar cStatus={status} cOpeningT={openT} cCloseT={closeT} />
                </Grid.Row>
                <Grid.Row style={{ paddingLeft: '100px' }} >
                    { content }
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Campaign