import React, { Component } from 'react';
import moment from 'moment';

import AddButton from './AddButton';
const faGlyphStyle = { verticalAlign: 'middle' };

class DashboardHeader extends Component {
    render() {
        const { 
            month, 
            year,
            decrementMonth,
            incrementMonth,
            monthlyAverage,
            addingResult,
            enableResultForm
        } = this.props;

        return (
            <div className='card-header text-center'>                
                <h1 className='h3 m-0 font-weight-bold'>
                    <i 
                        className='pull-left fa fa-chevron-left fa-2x'
                        style={faGlyphStyle}
                        onClick={decrementMonth}
                    >
                    </i>
                    {moment({ month }).format('MMMM')} / {year}
                    <i 
                        className='pull-right fa fa-chevron-right fa-2x'
                        style={faGlyphStyle}
                        onClick={incrementMonth}
                    >
                    </i>
                </h1>
                <br />
                <h1 className='h4 m-0'>
                    Monthly Average Blood Glucose
                </h1>
                <h1 className='h4 m-0'>
                    {monthlyAverage > 0 ? `${monthlyAverage.toFixed(2)} mg/dL` : 'N/A'}
                </h1>
                <AddButton
                    css={'pull-left'}
                    isAddingResult={addingResult}
                    addResult={enableResultForm}
                >
                    Add
                </AddButton>
            </div>
        );
    }
}

export default DashboardHeader;