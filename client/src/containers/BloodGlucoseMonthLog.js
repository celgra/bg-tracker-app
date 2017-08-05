import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import BloodGlucoseMonthLogTable from './../components/BloodGlucoseMonthLogTable';
import BgResultForm from './../components/BgResultForm';
import AddButton from './../components/AddButton';
import { fetchResultsByMonth, addResult } from './../actions/actions_results';

class BloodGlucoseMonthLog extends Component {
    constructor(props) {
        super(props);

        let date = moment();
        let selectedMonth = date.month() + 1;
        let selectedYear = date.year();


        this.state = { 
            selectedMonth,
            selectedYear,
            addingResult: false
        };
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

    enableResultForm() {
        this.setState(() => { return { addingResult: true } });
        console.log(this.state.addingResult);
    }

    disableResultForm() {
        this.setState(() => { return { addingResult: false } });
    }

    render() {
        let { selectedMonth, selectedYear } = this.state;
        let { results } = this.props;
        let form = this.state.addingResult ? 
        <BgResultForm 
        closeForm={() => {this.disableResultForm()}} 
        history={this.props.history}/> 
        : null;

        return(
            <div className="container">
                <AddButton
                isAddingResult = {this.state.addingResult}
                addResult={() => this.enableResultForm()}>
                Add
                </AddButton>
                {form}
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
    let { month, year } = state;
    let results = _.values(state.bgData.results);

    return { month, year, results };
}

const mapDispatchToProps = { 
    fetchResultsByMonth, 
    addResult 
};

export default connect(mapStateToProps, mapDispatchToProps)(BloodGlucoseMonthLog);
