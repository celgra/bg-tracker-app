import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardContainer from '../dashboard/DashboardContainer';

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
              </Switch>
            </div>
        </main>
    );
}

export default Main;