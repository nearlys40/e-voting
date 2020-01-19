import { UserActionTypes } from './users.types'
import { history } from '../history'
import axios from 'axios'

export const userPostFetch = user => {
    return dispatch => {
        return fetch('http://localhost:3001/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ user })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    // Here you should have logic to handle invalid creation of a user.
                    // This assumes your Rails API will return a JSON object with a key of
                    // 'message' if there is an error with creating the user, i.e. invalid username
                } else {
                    localStorage.setItem("token", data.jwt)
                    dispatch(loginUser(data.user))
                }
            })
    }
}

export const userLoginFetch = user => dispatch => {
    axios.get(`http://localhost:3001/users?username=${user.username}&&password=${user.password}`)
        .then(res => {
            if(res.data.length === 0) {
                setTimeout(() => {
                    alert('Invalid username or password')
                }, 2000);
            } else {
                setTimeout(() => {
                    dispatch(loginUser(res.data))
                    history.push('/all-campaigns')
                }, 2000);
            }
        }
    )
}

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const loginUser = user => ({
    type: UserActionTypes.LOGIN_USER,
    payload: user
})