import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authenticated extends Component {

        render() {
            if (this.props.auth === true) {
                return <ComposedComponent {...this.props} />
            }
            
            return <Redirect to="/signin" />
        }
    }

    function mapStateToProps(state) {
        let { auth } = state.auth;
        
        return {
            auth
        };
    }

    return connect(mapStateToProps)(Authenticated);
}