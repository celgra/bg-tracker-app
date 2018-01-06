import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getReport } from '../actions/actions_report';

class ReportContainer extends Component {
    componentDidMount() {
        this.props.getReport();
    }

    render() {
        const request = axios.get('/api/a1c', { 
            headers: { 
                'x-auth': localStorage.getItem('auth') 
            } 
        }).then((res) => console.log(res.data));
        return (
            <div>Hello</div>
        );
    }
}

function mapStateToProps(state) {
    const { 
        a1c, 
        resultCount, 
        averageBloodGlucose 
    } = state;

    return {
        a1c,
        resultCount,
        averageBloodGlucose
    };
}

const mapDispatchToProps = {
    getReport
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportContainer);