import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticate, logIn } from './../actions/actions_authentication';

import SignIn from './SignIn';
import './SignIn.css';

class SignInContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            isModelOpen: false
        };
    }

    signUp() {
        this.props.history.push('/signup');
    }

    render() {
        let { authenticate, error, logIn } = this.props;

        return (
            <div>
                <SignIn
                error={error} 
                authenticate={() => authenticate(true)} 
                logIn={(e, p) => logIn(e, p)}
                signUp={() => this.signUp()}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    let { error } = state.auth;

    return {
        error
    };
}

const mapDispatchToProps = {
    authenticate,
    logIn
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);