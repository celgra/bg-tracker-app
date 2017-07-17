import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import BloodGlucoseMonthLogTable from './../components/BloodGlucoseMonthLogTable';
import { fetchResultsByMonth } from './../actions/actions_results';

class BloodGlucoseMonthLog extends Component {
    constructor(props) {
        super(props);

        let date = moment()
        let month = date.month() + 1;
        let year = date.year();

        this.state = { selectedMonth: month, selectedYear: year  };
    }

    componentDidMount() {
        let { selectedMonth, selectedYear } = this.state;

        this.props.fetchResultsByMonth(selectedMonth, selectedYear);
    }

    incrementMonth() {
        let { selectedMonth, selectedYear } = this.state;

        if (month + 1 > 12) {
            month = 1
            year =+ 1;
        } else {
            month =+ 1;
        }

        this.setState(() => {
             return { 
                 selectedMonth: month, 
                 selectedYear: year 
                } 
            });

        this.fetchResultsByMonth(month, year);
    }

    render() {
        return(
            <div className="container-fluid">
                <BloodGlucoseMonthLogTable
                month={this.state.selectedMonth} 
                year={this.state.selectedYear}
                results={this.props.results}/>
            </div>
        );
    }

}

function mapStateToProps(state) {
    let results = _.values(state.results);

    return { results };
}

export default connect(mapStateToProps, { fetchResultsByMonth })(BloodGlucoseMonthLog);