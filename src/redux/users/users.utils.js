import { loginUser, updateProfile } from './users.actions'
import isEmpty from 'is-empty'
import axios from 'axios'

export const userSignUpFetch = (newUser, history) => {
    return dispatch => {
        // axios.post('http://172.20.10.8:5000/user',
        //     {
        //         headers: {
        //             'Access-Control-Allow-Origin': '*',
        //             'Content-Type': 'application/json',
        //         },
        //         body: {
        //             'req_type': 'create',
        //             'credentials': [],
        //             'email': newUser.email,
        //             'username': newUser.username,
        //             'password': newUser.password,
        //             'extras': [],
        //             'campaigns': []
        //         }
        //     })

        //for local
        axios.post('http://localhost:3001/users',
            {
                credentials: [],
                email: newUser.email,
                username: newUser.username,
                password: newUser.password,
                extras: [],
                campaigns: []
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
        // axios.post('http://172.20.10.8:5000/user',
        //     {
        //         headers: {
        //             'Access-Control-Allow-Origin': '*',
        //             'Content-Type': 'application/json',
        //         },
        //         body: {
        //             'req_type': 'login',
        //             'username': user.username,
        //             'password': user.password,
        //         }
        //     })

        // for local
        axios.get(`http://localhost:3001/users?username=${user.username}&&password=${user.password}`)
            .then(res => {
                if (res.status === 200) {
                    if (isEmpty(res.data)) {
                        alert('Invalid username or password')
                    } else {
                        dispatch(loginUser(res.data[0]))
                        history.push('/all-campaigns')
                    }
                } else {
                    throw Error(res.statusText);
                }
            }).catch(error => console.log(error.message))
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