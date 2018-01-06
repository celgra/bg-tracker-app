import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getReport } from '../actions/actions_report';

import Report from './Report';

class ReportContainer extends Component {
    componentDidMount() {
        this.props.getReport();
    }

    render() {
        const {
            a1c,
            resultCount,
            averageBloodGlucose
        } = this.props;

        return (
            <div>
                <Report 
                    a1c={a1c}
                    resultCount={resultCount}
                    averageBloodGlucose={averageBloodGlucose}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {
        report: {
            a1c, 
            resultCount, 
            averageBloodGlucose
        }
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