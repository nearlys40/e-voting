import React from 'react'
import { userLoginFetch } from '../../redux/users/users.utils'
import { connect } from 'react-redux'
import './login-new.styles.scss'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.userLoginFetch(this.state, this.props.history)

        this.setState({
            username: '',
            password: ''
        })
    }



    render() {
        return (
            <div className='login'>

                <div className='login-container'>
                    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <h1 style={{ color: '#085b96' }}>WELCOME BACK, </h1>
                            <Segment>
                                <Form size='large' onSubmit={this.handleSubmit} >
                                    <Segment stacked className='segment-inner'>
                                        <Form.Field className='formfield-style'>
                                            <label className='text-label'><h4>USERNAME</h4></label>
                                            <Form.Input
                                                fluid icon='user'
                                                iconPosition='left'
                                                placeholder='username'
                                                value={this.state.username}
                                                name='username'
                                                onChange={this.handleChange}
                                                required />
                                        </Form.Field>

                                        <Form.Field className='formfield-style'>
                                            <label className='text-label'><h4>PASSWORD</h4></label>
                                            <Form.Input
                                                fluid
                                                icon='lock'
                                                iconPosition='left'
                                                placeholder='Password'
                                                type='password'
                                                name='password'
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                required
                                            />
                                        </Form.Field>
                                        <div className='submit-button-container'>
                                            <Button color='blue' fluid size='large' className='submit-button'>
                                                Login
                                            </Button>
                                        </div>
                                    </Segment>
                                </Form>

                                <Message attached='bottom' warning>
                                    <p>Don't have account?   <Link to='/sign-up' className='link'>Sign Up</Link></p>
                                </Message>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                    {/*<h1>WELCOME BACK, </h1>
                    <div className='form-container'>
                        <form onSubmit={this.handleSubmit}>
                            <FormInput
                                name='username'
                                type='text'
                                label='username'
                                value={this.state.username}
                                handleChange={this.handleChange}
                                required
                            />
                            <FormInput
                                name='password'
                                type='password'
                                label='password'
                                value={this.state.password}
                                handleChange={this.handleChange}
                                required
                            />
                            <div className='custom-button-container'>
                                <CustomButton type='submit'>Login</CustomButton>
                            </div>
                    </form>
                    </div>*/}
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    { userLoginFetch }
)(withRouter(LoginPage));