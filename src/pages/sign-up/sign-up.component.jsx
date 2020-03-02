import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { compose } from 'compose-react'
import { withTranslation } from 'react-i18next'
import { userSignUpFetch } from '../../redux/users/users.utils'
import './sign-up.styles.scss'
import '../login/login-new.styles.scss'
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'

class SignUp extends React.Component {
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
            alert(this.props.t('password-dont-match'))
        } else {
            this.props.userSignUpFetch(this.state, this.props.history)
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if(nextProps.isAuth) {
    //         this.props.history.push('/all-campaigns')
    //     }
    // }

    render() {
        const { t, i18n } = this.props

        return (
            <div className='sign-up'>
                <div className='sign-up-container'>
                <Grid textAlign='center' style={{ height: '100vh' }} >
                        <Grid.Column >
                            <h1 className='title-text'>- {t('sign-up')} -</h1>
                            <Segment>
                                <Form size='large' onSubmit={this.handleSubmit} >
                                    <Segment stacked className='segment-inner'>
                                        <Form.Field className='formfield-style'>
                                            <label className='text-label'><h4>{t('email').toUpperCase()}</h4></label>
                                            <Form.Input
                                                fluid icon='mail outline'
                                                iconPosition='left'
                                                placeholder={t('email')}
                                                value={this.state.email}
                                                name='email'
                                                onChange={this.handleChange}
                                                required />
                                        </Form.Field>

                                        <Form.Field className='formfield-style'>
                                             <label className='text-label'><h4>{t('username').toUpperCase()}</h4></label>
                                            <Form.Input
                                                fluid icon='user'
                                                iconPosition='left'
                                                placeholder={t('username')}
                                                value={this.state.username}
                                                name='username'
                                                onChange={this.handleChange}
                                                required />
                                        </Form.Field>

                                        <Form.Field className='formfield-style'>
                                            <label className='text-label'><h4>{t('password').toUpperCase()}</h4></label>
                                            <Form.Input
                                                fluid
                                                icon='lock'
                                                iconPosition='left'
                                                placeholder={t('password')}
                                                type='password'
                                                name='password'
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                required
                                            />
                                        </Form.Field>

                                        <Form.Field className='formfield-style'>
                                            <label className='text-label'><h4>{t('confirm-password').toUpperCase()}</h4></label>
                                            <Form.Input
                                                fluid
                                                icon='lock'
                                                iconPosition='left'
                                                placeholder={t('confirm-password')}
                                                type='password'
                                                name='password2'
                                                value={this.state.password2}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <label>{t('password-dont-match')}</label>
                                        </Form.Field>

                                        <div className='submit-button-container'>
                                            <Button color='orange' fluid size='large' className='register-button'>
                                                {t('sign-up')}
                                            </Button>
                                        </div>
                                    </Segment>
                                </Form>

                                <Message attached='bottom' color='violet'>
                                    <p>{t('already-have-an-account')}   <Link to='/login' style={{fontSize: '15px'}}>{t('login')}</Link></p>
                                </Message>
                            </Segment>

                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ users: isAuth }) => ({
    isAuth
})

const mapDispatchToProps = dispatch => ({
    userSignUpFetch: (user, history) => dispatch(userSignUpFetch(user, history))
})

const ComposeSignUp = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withTranslation()
)(SignUp)

const SignUpPage = () => {
    return (
        <Suspense fallback='loading'>
            <ComposeSignUp />
        </Suspense>
    )
}

export default SignUpPage