import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardContainer from '../dashboard/DashboardContainer';
import ReportContainer from '../report/ReportContainer';

const Main = () => {
    return (
        <main className="main" style={{marginTop: 20}}>
            <div style={{ height: '100%' }}>
              <Switch>
                <Route 
                    exact 
                    path="/" 
                    component={DashboardContainer}
                />
                <Route 
                    path="/report"
                    component={ReportContainer}
                />
              </Switch>
            </div>
        </main>
    );
}

export default Main;