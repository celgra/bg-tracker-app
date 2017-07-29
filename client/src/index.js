import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import './index.css';
import RequireAuth  from './components/requireAuth';
import App from './App';
import SignInContainer from './signin/SignInContainer';
//import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers'; 

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/signin" name="SignIn" component={SignInContainer} />
                    <Route path="/" name="Home" component={RequireAuth(App)} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
//registerServiceWorker();
