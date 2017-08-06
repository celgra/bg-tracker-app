import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticate } from './../actions/actions_authentication';

export default function (ComposedComponent) { 
    class NotAuthenticated extends Component {
        
        componentWillMount() {
            if (localStorage.getItem('auth')) {
                this.props.authenticate(true);
                this.props.history.push('/');
            } else {
                this.props.authenticate(false);
            }
        };

        componentWillReceiveProps(nextProps) {
            console.log(nextProps.auth);
            if (nextProps.auth) {
                this.props.history.push('/');
            }
        }

        render() {
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