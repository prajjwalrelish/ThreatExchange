import React from 'react';
import Cookies from 'js-cookie'
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
    return ( 
        <Route 
            {...rest}
            render={props => {
                if(Cookies.get('access') === undefined ) return <Redirect to={{
                    pathname: "/login",
                    state: {from: props.location} 
                }} />
                return Component ? 
                <Component {...props} /> :
                render(props);
            }}
        />
    );
}
 
export default ProtectedRoute;