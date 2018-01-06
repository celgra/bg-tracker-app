import React from 'react';
import moment from 'moment';

const parseDateWithMoment = (date) => {
    return moment(date)
        .format("MMMM D YYYY h:mm A");
}

const BloodGlucoseTable = (props) => {
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
    }) :  null;

    return (
        <table className="table table-bordered table-striped table-condensed">
            <thead>
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

export default BloodGlucoseTable;