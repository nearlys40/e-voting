import React from 'react'
import FeaturesPage from '../features/features.component'
import AboutUsPage from '../about-us/about-us.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import Footer from '../../components/footer/footer.component'
import './home.styles.scss'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { scrollStatus: 'scroll stopped' };
        this._timeout = null;
    }

    componentDidMount() {
        window.addEventListener('scroll', (e) => this.handleScroll(e.target));
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
        return (
            <div className='home' id='home'>
                <div className='content-container'>
                    <div className='text-container'>
                        <h1>Highly Secured</h1>
                        <h2>electronic voting platforms</h2>
                        <h3>
                            Leveraging cutting-edge technologies to<br />
                            ensure personal privacy and integrity of<br />
                            voting data
                        </h3>
                    </div>
                    <div className='button-container'>
                        <CustomButton>Get Started</CustomButton>
                        <CustomButton>Learn More</CustomButton>
                    </div>
                </div>
                <FeaturesPage />
                <AboutUsPage />
                {
                    this.state.scrollStatus === 'scroll stopped'
                    && (<Footer />)
                }
            </div>
        );
    }
}

export default HomePage;