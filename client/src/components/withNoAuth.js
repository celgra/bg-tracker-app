import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticate } from './../actions/actions_auth';

export default function (ComposedComponent) { 
    class NotAuthenticated extends Component {
        
        componentWillMount() {
            if (localStorage.getItem('auth')) {
                this.props.authenticate(true);
                this.props.history.push('/');
            }
        };

        render() {
            if (this.props.auth === true) {
                return <Redirect to="/" />;
            }
            
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        let { auth } = state.auth;

        return {
            auth
        };
    }

    const mapDispatchToProps = {
        authenticate
    };

    return connect(mapStateToProps, mapDispatchToProps)(NotAuthenticated);
}