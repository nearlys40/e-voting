import React, { Suspense } from 'react'
import CampaignPreview from '../../components/campaign-preview/campaign-preview.component'
import { connect } from 'react-redux'
import { compose } from 'compose-react'
import { withRouter } from 'react-router-dom';
import isEmpty from 'is-empty'
// import { Input } from 'antd'
import CAMPAIGNS_MOCKUP_DATA from '../../assets/campaigns'
import './all-campaigns.styles.scss'
import { Grid, Search, Button, Icon, Responsive } from 'semantic-ui-react'
import _ from 'lodash'
import { withTranslation } from 'react-i18next';

class AllCampaigns extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            results: [],
            value: '',
            user: null
        }
    }

    componentDidMount() {
        this.setState({ user: this.props.currentUser }, () => console.log(this.state.user))
    }

    handleResultSelect = (e, { result }) => {
        console.log(result, 'pp')
        this.setState({ value: result })
        this.props.history.push({
            pathname: '/campaign-management',
            state: {
                name: result.title,
                createdOn: result.createdOn,
                imageUrl: result.image,
                description: result.description,
                candidates: result.candidates,
                voters: result.voters,
                id: result.id
            }
        })
    }

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            const source = this.state.user
            if (this.state.value.length < 1) {
                return this.setState({ isLoading: false, results: [], value: '' })
            }

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = (result) => re.test(result.name)

            this.setState({
                isLoading: false,
                results: _.filter(this.state.user.campaigns, isMatch),
            })
            console.log('dumm u', _.filter(this.state.user.campaigns, isMatch))
        }, 300)
    }

    render() {
        const { isLoading, value, results, user } = this.state
        const { t, i18n, currentUser } = this.props
        let formatedResultList = []
        results.map((result) => {
            formatedResultList.push({ 'title': result.name, 'description': result.description, 'image': result.imageUrl, 'id': result.id, 'createdOn': result.createdOn, 'candidates': result.candidates, 'voters': result.voters })
        })

        return (
            <div className='campaigns-container'>

                <div className='page-indicator'>
                    <span className='dashboard-text'>Dashboard</span>|
                <span className='all-campaigns-text'>All Campaigns</span>
                </div>
                <h1 className='title-text'>- Campaigns -</h1>
                <Grid>
                    <Grid.Row style={{ display: 'flex', justifyContent: 'center', width: '100vw', paddingTop: '2vh' }}>
                        <Grid.Column width={4}></Grid.Column>
                        <Grid.Column width={8} className='centered-searchbar'>
                            <Search
                                size='large'
                                className="search-bar"
                                loading={isLoading}
                                placeholder="Search Campaign..."
                                onResultSelect={this.handleResultSelect}
                                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                                    leading: true,
                                })}
                                results={formatedResultList}
                                value={value}

                                {...this.props}
                            />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                                <Button color='blue' size='large' onClick={() => this.props.history.push('/new-campaign')}>
                                    <Icon name='add circle' /><h4 style={{ display: 'inline', color: 'white' }}>  New Campaign</h4>
                                </Button>
                            </Responsive>
                            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                                <Button animated='vertical' color='blue' size='large' onClick={() => this.props.history.push('/new-campaign')}>
                                    <Button.Content hidden>New</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='add circle' />
                                    </Button.Content>
                                </Button>
                            </Responsive>
                        </Grid.Column>

                    </Grid.Row>
                    <Grid.Row style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingLeft: '5%', paddingRight: '5%' }}>
                        {
                            !isEmpty(this.state.user) &&
                            (<CampaignPreview
                                key={user.id}
                                campaigns={user.campaigns}
                            />)
                        }
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ({ users: { currentUser } }) => ({
    currentUser
})

const ComposeAllCampaigns = compose(
    connect(mapStateToProps, null),
    withRouter,
    withTranslation()
)(AllCampaigns)

const AllCampaignsPage = () => {
    return (
        <Suspense fallback='loading'>
            <ComposeAllCampaigns />
        </Suspense>
    )
}

export default AllCampaignsPage