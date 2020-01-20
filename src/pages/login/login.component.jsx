import React from 'react'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { userLogin } from '../../redux/users/users.utils'
import { connect } from 'react-redux'
import './login.styles.scss'
import { withRouter } from 'react-router'

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
        this.setState({[name]: value}); 
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.userLogin(this.state, this.props.history)

        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
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
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    { userLogin }
)(withRouter(LoginPage));