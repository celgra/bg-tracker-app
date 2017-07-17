import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import BloodGlucoseMonthLogTable from './../components/BloodGlucoseMonthLogTable';
import { fetchResultsByMonth } from './../actions/actions_results';

class BloodGlucoseMonthLog extends Component {
    componentDidMount() {
        let date = moment()
        let month = date.month() + 1;
        let year = date.year();

        this.props.fetchResultsByMonth(month, year);
    }

    incrementMonth() {
        let { month, year } = this.props;

        if (month + 1 > 12) {
            month = 1
            year =+ 1;
        }

        this.fetchResultsByMonth(month, year);
    }

    render() {
        return(
            <div className="container-fluid">
                <BloodGlucoseMonthLogTable
                month={this.props.month} 
                year={this.props.year}
                results={this.props.results}/>
            </div>
        );
    }

}

function mapStateToProps(state) {
    let results = _.values(state.results);
    let month = (results.length > 1 ? new Date(results[0].submittedDate).getMonth() + 1 : -1);
    let year = (results.length > 1 ? new Date(results[0].submittedDate).getFullYear() : -1);

    return { results, month, year };
}

export default connect(mapStateToProps, { fetchResultsByMonth })(BloodGlucoseMonthLog);