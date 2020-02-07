import React, { Suspense } from 'react'
import { userLoginFetch } from '../../redux/users/users.utils'
import { connect } from 'react-redux'
import { compose } from 'compose-react'
import './login-new.styles.scss'
import { withRouter } from 'react-router'
import { withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'

class Login extends React.Component {
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
        const { t, i18n } = this.props

        return (
            <div className='login'>
                <div className='login-container'>
                    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <h1 className='title-text'>{t('welcome-back')}</h1>
                            <Segment>
                                <Form size='large' onSubmit={this.handleSubmit} >
                                    <Segment stacked className='segment-inner'>
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
                                        <div className='submit-button-container'>
                                            <Button color='blue' fluid size='large' className='submit-button'>
                                                {t('login')}
                                            </Button>
                                        </div>
                                    </Segment>
                                </Form>

                                <Message attached='bottom' warning>
                                    <p>{t('dont-have-account')}   <Link to='/sign-up' className='link'>{t('sign-up')}</Link></p>
                                </Message>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    userLoginFetch: (user, history) => dispatch(userLoginFetch(user, history))
})

const ComposeLogin = compose(
    connect(null, mapDispatchToProps),
    withRouter,
    withTranslation()
)(Login)

const LoginPage = () => {
    return (
        <Suspense fallback='loading'>
            <ComposeLogin />
        </Suspense>
    )
}

export default LoginPage