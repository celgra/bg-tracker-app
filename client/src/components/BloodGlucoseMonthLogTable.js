import React from 'react';
import moment from 'moment';

const parseDateWithMoment = (date) => {
    return moment(date)
        .format("dddd, MMMM D YYYY");
}

const BloodGlucoseMonthTable = (props) => {
    let rows = props.results ? props.results.map(result => {
            return (
                <tr key={result._id}>
                    <td>
                        {result.user}
                    </td>
                    <td>
                        {parseDateWithMoment(result.submittedDate)}
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