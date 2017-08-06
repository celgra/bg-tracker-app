import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BloodGlucoseMonthLogTable from './BloodGlucoseMonthLogTable';
import BgResultForm from './BgResultForm';
import AddButton from './AddButton';
import { fetchResultsByMonth, addResult } from './../actions/actions_bgData';

class BloodGlucoseMonthLog extends Component {
    constructor() {
        super();

        this.state = { 
            addingResult: false
        };
    }

    componentDidMount() {
        let { month, year } = this.props;

        this.props.fetchResultsByMonth(month, year);
    }

    incrementMonth() {
        let { month, year } = this.props;

        if ( (month + 1) > 12) {
            month = 1
            year++;
        } else {
            month++;
        }

        this.props.fetchResultsByMonth(month, year);
    }

    decrementMonth() {
        let { month, year } = this.props;

        if ( (month - 1) < 1) {
            month = 11
            year--;
        } else {
            month--;
        }

        this.props.fetchResultsByMonth(month, year);
    }

    enableResultForm() {
        this.setState(() => { return { addingResult: true } });
    }

    disableResultForm() {
        this.setState(() => { return { addingResult: false } });
    }

    render() {
        let { month, year, results } = this.props;

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
                month={month} 
                year={year}
                results={results}
                incrementMonth={() => this.incrementMonth()}
                decrementMonth={() => this.decrementMonth()} />
            </div>
        );
    }

}

function mapStateToProps(state) {
    let { month, year } = state.bgData;
    let results = _.values(state.bgData.results);

    return { month, year, results };
}

const mapDispatchToProps = { 
    fetchResultsByMonth, 
    addResult 
};

export default connect(mapStateToProps, mapDispatchToProps)(BloodGlucoseMonthLog);
