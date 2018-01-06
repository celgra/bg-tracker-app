import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import './index.css';
import withAuth  from './components/withAuth';
import withNoAuth from './components/withNoAuth';
import App from './App';
import SignInContainer from './signin/SignInContainer';
import SignUpContainer from './signup/SignUpContainer';
//import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers'; 

const composeWithMiddleware = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(reducers, composeWithMiddleware);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route 
                        path="/signin" 
                        name="SignIn" 
                        component={withNoAuth(SignInContainer)} 
                    />
                    <Route 
                        path="/signup" 
                        name="SignUp" 
                        component={withNoAuth(SignUpContainer)} 
                    />
                    <Route 
                        path="/" 
                        name="Dashboard" 
                        component={withAuth(App)} 
                    />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
//registerServiceWorker();
