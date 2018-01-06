import React from 'react';

const Report = ({ 
    a1c,
    resultCount,
    averageBloodGlucose
 }) => {
    return(
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h1 className='h3 m-0 font-weight-bold'>
                        Report
                    </h1>
                </div>
                <div className="card-block">
                <span>
                    {`Your average blood glucose for the past 90 days: ${averageBloodGlucose} mg/dL`}
                </span>
                <h1 className='h3 font-weight-bold'>
                    {`Your estimated A1C: ${a1c}%`}
                </h1>
                <span>
                    {`This is based on ${resultCount} blood glucose readings from the past 90 days.`} 
                </span>
                </div>
            </div>
        </div>
    );
};

export default Report;