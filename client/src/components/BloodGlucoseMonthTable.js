import React from 'react';
import moment from 'moment';

const BloodGlucoseMonthTable = (props) => {
    let rows = props.results ? props.results.map(result => {
            return (
                <tr>
                    <td>
                        {result.user}
                    </td>
                    <td>
                        {moment(result.submittedDate).format("dddd, MMMM D YYYY")}
                    </td>
                    <td>
                        {result._id}
                    </td>
                    <td>
                        {result.bloodGlucoseLevel}
                    </td>
                </tr>
            );
        }) : null;

    return (
        <table className="table table-bordered table-striped table-condensed">
            <thead>
                <tr>
                    <th colSpan="4" className="text-center">
                    {`${props.month} / ${props.year}`}
                    </th>
                </tr>
                <tr>
                    <th>Result Id</th>
                    <th>Result Date</th>
                    <th>User Id</th>
                    <th>BG Level</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
};

export default BloodGlucoseMonthTable;