import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import DashboardHeader from './DashboardHeader';
import DashboardBody from './DashboardBody';
import BgResultForm from './BgResultForm';

import { fetchResultsByMonth, addResult } from './../actions/actions_bgData';

class DashboardContainer extends Component {
    constructor() {
        super();

        this.state = {
            addingResult: false
        };
    }

    componentDidMount() {
        const { month, year } = this.props;

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
            month = 12
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
        const { month, year, results, monthlyAverage } = this.props;

        const form = this.state.addingResult ?
        <BgResultForm
            closeForm={() => {this.disableResultForm()}}
            history={this.props.history}
        />
        : null;

        return(
            <div className='container'>
                <div className='card'>
                    <DashboardHeader
                       month={month - 1}
                       year={year}
                       incrementMonth={() => this.incrementMonth()}
                       decrementMonth={() => this.decrementMonth()}
                       monthlyAverage={monthlyAverage}
                       addingResult={this.state.addingResult}
                       enableResultForm={() => this.enableResultForm()}
                    />
                    {form}
                    <DashboardBody 
                        results={results}
                    />
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    const { month, year } = state.bgData;
    const results = _.values(state.bgData.results);
    const monthlyAverage =  results.length > 0 ? 
        results.reduce((acc, val) => acc + val.bloodGlucoseLevel, 0) / results.length : 0;

    return { month, year, results, monthlyAverage };
}

const mapDispatchToProps = {
    fetchResultsByMonth,
    addResult
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
