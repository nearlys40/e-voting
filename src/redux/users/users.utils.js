import { alertError } from '../alerts/alerts.actions'
import { loginUser } from './users.actions'
import isEmpty from 'is-empty'
import axios from 'axios'

export const userSignUpFetch = (newUser, history) => dispatch => {
    axios.post('http://localhost:3001/users',
        {
            id: '',
            credentials: [],
            email: newUser.email,
            username: newUser.username,
            password: newUser.password,
            extras: [],
            campaigns: []
        }
    ).then(res => {
        if (res.status === 201) {
            history.push('/login')
        }
    }).catch(error => dispatch(alertError(error.message)))
}

export const userLoginFetch = (user, history) => dispatch => {
    axios.get(`http://localhost:3001/users?username=${user.username}&&password=${user.password}`)
        .then(res => {
            if (res.status === 200) {
                if (isEmpty(res.data)) {
                    setTimeout(() => {
                        alert('Invalid username or password')
                    }, 2000);
                } else {
                    setTimeout(() => {
                        dispatch(loginUser(res.data[0]))
                        history.push('/all-campaigns')
                    }, 2000)
                }
            }
        }).catch(error => dispatch(alertError(error.message)))
}