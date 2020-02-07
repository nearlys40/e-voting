import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    isAuthenticated = true

    return (
        <Route
            {...rest}
            render={props => (
                isAuthenticated ?
                    <Component {...props} />
                    :
                    <Redirect to='/login' />
            )}
        />
    )
}

const mapStateToProps = ({ users: { isAuthenticated } }) => ({
    isAuthenticated
})

export default connect(mapStateToProps, null)(PrivateRoute)