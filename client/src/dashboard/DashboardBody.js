import React, { PureComponent } from 'react';

import BloodGlucoseTable from './BloodGlucoseTable';
import NoResults from './NoResults';

class DashboardBody extends PureComponent {
    render() {
        const { results } = this.props;
        return (
            <div className='card-block'>
                {results.length > 0 ?
                    <BloodGlucoseTable 
                        results={results}
                    /> :
                    <NoResults />
                }
            </div>
        );
    }
}

export default DashboardBody;