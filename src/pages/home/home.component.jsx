import React from 'react'
import FeaturesPage from '../features/features.component'
import AboutUsPage from '../about-us/about-us.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import Footer from '../../components/footer/footer.component'
import { Responsive, Grid } from 'semantic-ui-react'
import { Fade, Reveal } from 'react-reveal'
import './home.styles.scss'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { scrollStatus: 'scroll stopped', width: '', height: '' };
        this._timeout = null;
    }

    handleOnUpdate = (e, { width }) => this.setState({ width })

    componentDidMount() {
        window.addEventListener('scroll', (e) => this.handleScroll(e.target));
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        console.log(window.innerWidth, window.innerHeight, ' width, height')
    }

    handleScroll = (event) => {
        if (this._timeout) { //if there is already a timeout in process cancel it
            clearTimeout(this._timeout);
        }

        this._timeout = setTimeout(() => {
            this._timeout = null;
            this.setState({
                scrollStatus: 'scroll stopped'
            });
        }, 1000);

        if (this.state.scrollStatus !== 'scrolling') {
            this.setState({
                scrollStatus: 'scrolling'
            });
        }
    }

    render() {
        const { width } = this.state;
        const gridWidth =
            width <= Responsive.onlyMobile.maxWidth ? [16, 0] : [9, 7]

        return (
            <Responsive onUpdate={this.handleOnUpdate}>
                <div className='home' id='home'>
                    <Grid className='content-container'>}>
                    <Grid.Row style={{ height: '100%' }}>
                            <Grid.Column width={gridWidth[0]} className='center-grid'>
                                <div style={{ display: 'block' }}>
                                    <div>
                                        <Fade duration={2000}>
                                            <div className='text-container'>
                                                <h1>Highly Secured</h1>
                                                <h2>electronic voting platforms</h2>
                                                <h3>
                                                    Leveraging cutting-edge technologies to<br />
                                                    ensure personal privacy and integrity of<br />
                                                    voting data
                                                </h3>
                                            </div>
                                        </Fade>
                                    </div>
                                    <div>
                                        <Fade delay={800} duration={2000}>
                                            <div className='button-container'>
                                                <CustomButton>Get Started</CustomButton>
                                                <CustomButton>Learn More</CustomButton>
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={gridWidth[1]} className='centered-ele'>
                                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                                <div className='centered-ele'>
                                    <img src={require('../../assets/pencil-holder.png')} style={{ width: '70%', height: '70%' }} />
                                </div>
                                </Responsive>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Reveal effect="fadeInUp">
                        <FeaturesPage />
                    </Reveal>
                    <Reveal effect="fadeInUp">
                        <AboutUsPage />
                    </Reveal>
                    {
                        this.state.scrollStatus === 'scroll stopped'
                        && (<Footer />)
                    }
                </div>
            </Responsive>
        );
    }
}

export default HomePage;