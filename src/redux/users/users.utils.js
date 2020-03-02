import { loginUser, updateProfile, logoutUser, setCurrentUser } from './users.actions'
import { authHeader } from '../../services/auth-header'
import isEmpty from 'is-empty'
import axios from 'axios'

export const userSignUpFetch = (newUser, history) => {
    return dispatch => {
        axios.post('http://localhost:3001/users',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    credentials: [],
                    email: newUser.email,
                    username: newUser.username,
                    password: newUser.password,
                    extras: [],
                    campaigns: []
                }
            }
        )
            .then(res => {
                if (res.status === 201) {
                    history.push('/login')
                } else {
                    throw Error(res.statusText);
                }
            }).catch(error => console.log(error.message))
    }
}

export const userLoginFetch = (user, history) => {
    return dispatch => {
        axios.get(`http://localhost:3001/users`, {
            params: {
                username: user.username,
                password: user.password
            }, 
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    if (isEmpty(res.data)) {
                        alert('Invalid username or password')
                    } else {
                        localStorage.setItem('user', res.data[0])
                        dispatch(loginUser(res.data[0]))
                        history.push('/all-campaigns')
                    }   
                } else {
                    throw Error(res.statusText);
                }
            }).catch(error => console.log(error.message))
    }
}

export const userLogoutFetch = (history) => {
    return dispatch => {
        localStorage.removeItem('user')
        dispatch(logoutUser())
        history.push('/login')
    }
}

export const getUserFetch = (id) => {
    return dispatch => {
        axios.get(`http://localhost:3001/users/`, {
            params: {
                id: id
            }, 
            headers: {
                Authorization: authHeader()
            }
        })
            .then(res => {
                if (res.status === 200) {
                    dispatch(setCurrentUser(res.data[0]))
                } else {
                    localStorage.removeItem('token')
                }
            })
    }
}

export const updateProfileFetch = (data, history) => {
    return dispatch => {
        //for local
        axios.put(`http://localhost:3001/users`,
            {
                user_id: data.id,
                update: {
                    //updating field data
                }
            }
        )
            .then(res => {
                if (res.status === 200) {
                    dispatch(updateProfile(res.data))
                    history.push('/all-campaigns')
                } else {
                    throw Error(res.statusText);
                }
            }).catch(error => console.log(error.message))
    }
}