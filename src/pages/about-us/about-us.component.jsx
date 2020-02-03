import React from 'react'
import { Fade, Reveal } from 'react-reveal'
import { Header, Grid, Responsive } from 'semantic-ui-react'
import { Divider, Carousel } from 'antd';
import './about-us.styles.scss'


class AboutUsPage extends React.Component {
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
            width <= Responsive.onlyTablet.maxWidth ? [16,0]:[10,6]  
        return (
            <Responsive onUpdate={this.handleOnUpdate}>
            <div className='about-us' id='about-us'>
                <Fade duration={3500}>
                    <Divider>  <h1>Meet Us</h1></Divider>
                </Fade>
                <br />
                <br />
                <Grid className='grid-style'>
                    <Grid.Row>
                    <Grid.Column width={gridWidth[0]} >
                        <div >
                            <Carousel autoplay>
                                <div style={{ padding: '10%' }}>
                                    <img src={require('../../assets/fea1.png')} className='img-ele'/>
                                </div>
                                <div style={{ padding: '10%' }}>
                                    <img src={require('../../assets/fea2.png')} className='img-ele'/>
                                </div>
                                <div style={{ padding: '10%' }}>
                                    <img src={require('../../assets/fea3.png')} className='img-ele'/>
                                </div>
                                <div style={{ padding: '10%' }}>
                                    <img src={require('../../assets/fea1.png')} className='img-ele'/>
                                </div>
                                <div style={{ padding: '10%' }}>
                                    <img src={require('../../assets/fea2.png')} className='img-ele'/>
                                </div>
                            </Carousel>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={gridWidth[1]}>
                    <Responsive minWidth={Responsive.onlyTablet.maxWidth}>
                    <Fade delay={1000} duration={1500}>
                        <h1>Meeting Our Team</h1>
                        <p>There will be information about our team here soon</p>
                    </Fade>
                    </Responsive>
                    </Grid.Column>
                    </Grid.Row>
                    <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
                    <Grid.Row>
                    <Fade delay={1000} duration={1500}>
                        <div className='text-block-tablet'>
                        <div style={{display:'block'}}>
                        <br/>
                        <h1>Meeting Our Team</h1>
                        <p>There will be information about our team here soon</p>
                        </div>
                        </div>
                    </Fade>
                   </Grid.Row> 
                   </Responsive>
                </Grid>
            </div>
            </Responsive>
        )
    }
}

export default AboutUsPage;