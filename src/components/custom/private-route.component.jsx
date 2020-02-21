import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
    isAuth = true

    return (
        <Route
            {...rest}
            render={props => (
                isAuth ?
                    <Component {...props} />
                    :
                    <Redirect to='/login' />
            )}
        />
    )
}

const mapStateToProps = ({ users }) => ({
    isAuth: users.isAuth
})

export default connect(mapStateToProps, null)(PrivateRoute)