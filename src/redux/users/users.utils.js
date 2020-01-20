import { alertError } from '../alerts/alerts.actions'
import { loginUser } from './users.actions'
import axios from 'axios'

export const userSignUp = (newUser, history) => dispatch => {
    axios.post('http://localhost:3001/users', {
        id: '',
        credentials: [],
        email: newUser.email,
        username: newUser.username,
        password: newUser.password,
        extras: [],
        campaigns: []
    }).then(res => {
        if(res.status === 201) {
            history.push('/login')
        }
    })
    .catch(error => dispatch(alertError(error.message)))
}

export const userLogin = (user, history) => dispatch => {
    axios.get(`http://localhost:3001/users?username=${user.username}&&password=${user.password}`)
        .then(res => {
            if (res.data.length === 0) {
                setTimeout(() => {
                    alert('Invalid username or password')
                }, 2000);
            } else {
                setTimeout(() => {
                    history.push('/all-campaigns')
                    dispatch(loginUser(res.data))
                }, 2000)
            }
        })
        .catch(error => dispatch(alertError(error.message)))
}