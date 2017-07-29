import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticate } from './../actions/actions_authentication';

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
        if (this.props.auth) {
            this.props.history.push('/');
        }
    };

    componentWillUpdate(nextProps) {
        if (nextProps.auth) {
            this.props.history.push('/');
        }
    }

    openModal() {
        let { isModelOpen } = this.state;
        this.setState(() => {
            return { 
                isModelOpen: true
            };
        });
    }

    closeModal() {
        let { isModelOpen } = this.state;
        this.setState(() => {
            return { 
                isModelOpen: false
            };
        });
    }

    render() {
        let { authenticate, auth } = this.props;
        let modal = this.state.isModelOpen ? 
            <Modal>
                <RegisterModal
                closeModal={() => this.closeModal()} />
            </Modal> : null;

        return (
            <div>
                <SignIn
                auth={this.props.auth} 
                authenticate={() => authenticate(!auth)} 
                openModal={() => this.openModal()}/>
                {modal}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

const mapDispatchToProps = {
    authenticate
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);