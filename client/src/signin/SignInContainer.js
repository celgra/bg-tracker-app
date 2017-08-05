import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticate, logIn } from './../actions/actions_authentication';

import SignIn from './SignIn';
import './SignIn.css';
import Modal from './../components/Modal';
import RegisterModal from './RegisterModal';

class SignInContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            isModelOpen: false
        };
    }
    
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

    openModal() {
        this.setState(() => {
            return { 
                isModelOpen: true
            };
        });
    }

    closeModal() {
        this.setState(() => {
            return { 
                isModelOpen: false
            };
        });
    }

    render() {
        let { authenticate, auth, error, logIn } = this.props;

        let modal = this.state.isModelOpen ? 
            <Modal>
                <RegisterModal
                closeModal={() => this.closeModal()} />
            </Modal> : null;

        return (
            <div>
                <SignIn
                auth={auth}
                error={error} 
                authenticate={() => authenticate(!auth)} 
                logIn={(e, p) => logIn(e, p)}
                openModal={() => this.openModal()}/>
                {modal}
            </div>
        );
    }
}

function mapStateToProps(state) {
    let { auth, error } = state.auth;

    return {
        auth,
        error
    };
}

const mapDispatchToProps = {
    authenticate,
    logIn
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);