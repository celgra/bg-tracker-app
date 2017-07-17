import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import BloodGlucoseMonthLogTable from './../components/BloodGlucoseMonthLogTable';
import { fetchResultsByMonth } from './../actions/actions_results';

class BloodGlucoseMonthLog extends Component {
    constructor(props) {
        super(props);

        let date = moment();
        let selectedMonth = date.month() + 1;
        let selectedYear = date.year();

        this.state = { selectedMonth, selectedYear  };
    }

    componentDidMount() {
        let { selectedMonth, selectedYear } = this.state;

        this.props.fetchResultsByMonth(selectedMonth, selectedYear);
    }

    incrementMonth() {
        let { selectedMonth, selectedYear } = this.state;

        if ( (selectedMonth + 1) > 12) {
            selectedMonth = 1
            selectedYear++;
        } else {
            selectedMonth++;
        }

        this.setState(() => {
             return { 
                 selectedMonth, 
                 selectedYear 
                } 
            });

        this.props.fetchResultsByMonth(selectedMonth, selectedYear);
    }

    decrementMonth() {
        let { selectedMonth, selectedYear } = this.state;

        if ( (selectedMonth - 1) < 1) {
            selectedMonth = 12
            selectedYear--;
        } else {
            selectedMonth--;
        }

        this.setState(() => {
             return { 
                 selectedMonth, 
                 selectedYear 
                } 
            });

        this.props.fetchResultsByMonth(selectedMonth, selectedYear);
    }

    render() {
        let { selectedMonth, selectedYear } = this.state;
        let { results } = this.props;

        return(
            <div className="container-fluid">
                <BloodGlucoseMonthLogTable
                month={selectedMonth} 
                year={selectedYear}
                results={results}
                incrementMonth={() => this.incrementMonth()}
                decrementMonth={() => this.decrementMonth()} />
            </div>
        );
    }

}

function mapStateToProps(state) {
    let results = _.values(state.results);

    return { results };
}

export default connect(
    mapStateToProps, 
    { fetchResultsByMonth }
)(BloodGlucoseMonthLog);
