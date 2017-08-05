import React from 'react';
import moment from 'moment';

const parseDateWithMoment = (date) => {
    return moment(date)
        .format("MMMM D YYYY h:mm A");
}

const BloodGlucoseMonthTable = (props) => {
    let rows = props.results ? props.results.map(result => {
            return (
                <tr key={result._id}>
                    <td>
                        {result.bloodGlucoseLevel} mg/dL
                    </td>
                    <td>
                        {parseDateWithMoment(result.resultDate)}
                    </td>
                    <td>
                        {result.resultContext}
                    </td>
                </tr>
            );
        }) : null;

    return (
        <table className="table table-bordered table-striped table-condensed table-inverse">
            <thead>
                <tr>
                    <th colSpan="4" className="text-center"> 
                        <i className="fa fa-chevron-left" 
                        onClick={props.decrementMonth} />
                        &nbsp;
                        {`${props.month} / ${props.year}`}
                        &nbsp;
                        <i className="fa fa-chevron-right" 
                        onClick={props.incrementMonth} />
                    </th>
                </tr>
                <tr>
                    <th>Glucose</th>
                    <th>Date</th>
                    <th>Measured</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
};

export default BloodGlucoseMonthTable;