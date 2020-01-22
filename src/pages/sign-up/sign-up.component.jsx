import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { userSignUpFetch } from '../../redux/users/users.utils'
import './sign-up.styles.scss'
import '../login/login-new.styles.scss'
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'

class SignUpPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const { password, password2 } = this.state
        if(password !== password2) {
            alert("Password don't match!!")
        } else {
            this.props.userSignUpFetch(this.state, this.props.history)
        }
    }

    render() {
        return (
            <div className='sign-up'>
                <div className='sign-up-container'>
                <Grid textAlign='center' style={{ height: '100vh' }} >
                        <Grid.Column >
                            <h1 style={{ color: '#085b96' }}>REGISTER NEW USER</h1>
                            <Segment>
                                <Form size='large' onSubmit={this.handleSubmit} >
                                    <Segment stacked className='segment-inner'>
                                        <Form.Field className='formfield-style'>
                                            <label className='text-label'><h4>EMAIL</h4></label>
                                            <Form.Input
                                                fluid icon='mail outline'
                                                iconPosition='left'
                                                placeholder='email'
                                                value={this.state.email}
                                                name='email'
                                                onChange={this.handleChange}
                                                required />
                                        </Form.Field>

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

                                        <Form.Field className='formfield-style'>
                                            <label className='text-label'><h4>CONFIRM PASSWORD</h4></label>
                                            <Form.Input
                                                fluid
                                                icon='lock'
                                                iconPosition='left'
                                                placeholder='Confirmed Password'
                                                type='password'
                                                name='password2'
                                                value={this.state.password2}
                                                onChange={this.handleChange}
                                                required
                                            />
                                        </Form.Field>

                                        <div className='submit-button-container'>
                                            <Button color='orange' fluid size='large' className='register-button'>
                                                Register
                                            </Button>
                                        </div>
                                    </Segment>
                                </Form>

                                <Message attached='bottom' color='violet'>
                                    <p>Already have an account?   <Link to='/login' style={{fontSize: '15px'}}>Login</Link></p>
                                </Message>
                            </Segment>

                        </Grid.Column>
                    </Grid>
                   {/* <h1>SIGN UP FORM</h1>
                    <div className='form-container'>
                        <form onSubmit={this.handleSubmit}>
                            <FormInput
                                name='email'
                                type='email'
                                label='email'
                                value={this.state.email}
                                handleChange={this.handleChange}
                                required
                            />
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
                            <FormInput
                                name='password2'
                                type='password'
                                label='confirm password'
                                value={this.state.password2}
                                handleChange={this.handleChange}
                                required
                            />
                            <div className='custom-button-container'>
                                <CustomButton type='submit'>Sign Up</CustomButton>
                            </div>
                        </form>
                   </div>*/}
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { userSignUpFetch }
)(withRouter(SignUpPage));