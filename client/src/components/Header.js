import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { authenticate } from './../actions/actions_authentication';

class Header extends Component {

    signOut() {
        debugger;
        let { authenticate, history } = this.props;
        localStorage.removeItem('auth');
        authenticate(false);
        console.log("signing out");
        history.push('/signin');
    }

    render() {
        return (
            <header className="app-header navbar header-fixed">
                <div className="navbar-brand">
                    Blood Glucose Tracker
                </div>
                <NavBar signOut={() => this.signOut()}/>
            </header>
        );
    }
}

function mapStatetToProps(state) {
    return {
        auth: state.auth
    };
}

const mapDispatchToProps = {
    authenticate
};

export default connect(mapStatetToProps, mapDispatchToProps)(Header);