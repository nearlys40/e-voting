import React from 'react'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { loginUser } from '../../redux/users/users.actions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './login.styles.scss'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            errors: {}
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value}); 
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const userData = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.loginUser(userData)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.isAuthenticated) {
            this.props.history.push('/all-campaigns')
        }
    }

    render() {
        const { errors } = this.state

        return (   
            <div className='login'>
                <div className='login-container'>
                    <h1>WELCOME BACK, </h1>
                    <div className='form-container'>
                        <form onSubmit={this.handleSubmit}>
                            <FormInput
                                name='username'
                                type='text'
                                label='username'
                                value={this.state.username}
                                handleChange={this.handleChange}
                                error={errors.username}
                                required
                            />
                            <FormInput
                                name='password'
                                type='password'
                                label='password'
                                value={this.state.password}
                                handleChange={this.handleChange}
                                error={errors.password}
                                required
                            />
                            <div className='custom-button-container'>
                                <CustomButton type='submit'>Login</CustomButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    user,
    errors: user.errors
})

export default connect(
    mapStateToProps,
    { loginUser }
)(withRouter(LoginPage));