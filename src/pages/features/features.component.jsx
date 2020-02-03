import React from 'react'
import { Fade, Reveal } from 'react-reveal'
import { Header, Grid, Responsive } from 'semantic-ui-react'
import { Divider } from 'antd';
import './features.styles.scss'

class FeaturesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: '', height: '' };
    }

    componentDidMount() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    handleOnUpdate = (e, { width }) => this.setState({ width })

    render() {
        const { width } = this.state;
        const gridWidth =
            width <= Responsive.onlyMobile.maxWidth ? 8 : 4

        return (
            <div style={{ height: this.state.width <= Responsive.onlyMobile.maxWidth? 'auto':'100vh'}}>
            
            <div className='features' id='features'>
                <Fade duration={3500}>
                    <Divider>  <h1>Features Page</h1></Divider>
                </Fade>
                <br />
                <br />
                <div style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Responsive onUpdate={this.handleOnUpdate}>
                <Grid className='centered-ele'>
                    <Grid.Column className='centered-ele' width={gridWidth}>
                    <Fade delay={800} duration={1500}>
                        <div className='feature-ele'>
                            <img src={require('../../assets/fea1.png')} style={{ width: '50%', height: '50%', margin: '5%' }} />
                            <h2>Feature 1</h2>
                            <p>The description of this feature will be briefly describe here</p>
                        </div>
                    </Fade>
                    </Grid.Column>
                    <Grid.Column className='centered-ele' width={gridWidth}>
                    <Fade delay={1200}  duration={1500}>
                        <div className='feature-ele'>
                            <img src={require('../../assets/fea2.png')} style={{ width: '50%', height: '50%', margin: '5%' }} />
                            <h2>Feature 2</h2>
                            <p>The description of this feature will be briefly describe here</p>
                        </div>
                    </Fade>
                    </Grid.Column>
                    <Grid.Column className='centered-ele' width={gridWidth}>
                    <Fade delay={1600}  duration={1500}>
                        <div className='feature-ele'>
                            <img src={require('../../assets/fea3.png')} style={{ width: '50%', height: '50%', margin: '5%' }} />
                            <h2>Feature 3</h2>
                            <p>The description of this feature will be briefly describe here</p>
                        </div>
                        </Fade>
                    </Grid.Column>
                    <Grid.Column className='centered-ele' width={gridWidth}>
                    <Fade delay={2000}  duration={1500}>
                        <div className='feature-ele'>
                            <img src={require('../../assets/fea1.png')} style={{ width: '50%', height: '50%', margin: '5%' }} />
                            <h2>Feature 4</h2>
                            <p>The description of this feature will be briefly describe here</p>
                        </div>
                        </Fade>
                    </Grid.Column>
                </Grid>
                </Responsive>
                </div>

            </div>
            </div>
        )
    }
}

export default FeaturesPage;