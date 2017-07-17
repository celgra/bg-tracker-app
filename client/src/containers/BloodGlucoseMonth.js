import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BloodGlucoseMonthTable from './../components/BloodGlucoseMonthTable';
import { fetchResults } from './../actions/actions_results';

class BloodGlucoseMonth extends Component {
    componentDidMount() {
        this.props.fetchResults();
    }

    render() {
        return(
            <div className="container-fluid">
                <BloodGlucoseMonthTable
                month={this.props.month} 
                year={this.props.year}
                results={this.props.results}/>
            </div>
        );
    }

}

function mapStateToProps(state) {
    let results = _.values(state.results);
    let month = (results.length > 1 ? new Date(results[0].submittedDate).getMonth() : -1);
    let year = (results.length > 1 ? new Date(results[0].submittedDate).getFullYear() : -1);

    return { results, month, year };
}

export default connect(mapStateToProps, { fetchResults })(BloodGlucoseMonth);