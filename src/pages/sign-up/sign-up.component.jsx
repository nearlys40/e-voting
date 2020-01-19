import React from 'react'
import { connect } from 'react-redux'
import { userPostFetch } from '../../redux/users/users.actions'
import { withRouter } from 'react-router-dom'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import './sign-up.styles.scss'

class SignUpPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            username: '',
            password: '',
            password2: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)

        this.props.userPostFetch(this.state)
    }

    render() {
        return (
            <div className='sign-up'>
                <div className='sign-up-container'>
                    <h1>SIGN UP FORM</h1>
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
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: newUser => dispatch(userPostFetch(newUser))
})

export default connect(
    null,
    mapDispatchToProps
)(withRouter(SignUpPage));