import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends Component {

        componentWillMount() {
            if (!this.props.auth) {
                this.props.history.push('/signin');
            }
        };

        componentWillUpdate(nextProps) {
            if (!nextProps.auth) {
                this.props.history.push('/sigin');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            auth: state.auth
        };
    }

    return connect(mapStateToProps)(Authentication);
}