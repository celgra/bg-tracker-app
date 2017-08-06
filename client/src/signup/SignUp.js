import React, { Component } from 'react';
//import { Field } from 'redux-form';

export default class SignUp extends Component {
    render() {
        return (
            <div className="app flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card-group mb-0">
                                <div className="card p-2">
                                    <div className="card-block">
                                        <h1>Sign up!</h1>
                                        <p className="text-muted">
                                            Create an account
                                        </p>
                                        <p className="text-danger">
                                            {/*warning*/}
                                        </p>
                                        <form>
                                            <div className={` mb-1`}>
                                                <span className="input-group-addon">
                                                    <i className="icon-user"></i>
                                                </span>
                                                <input type="text"
                                                    className=""
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className={` mb-2`}>
                                                <span className="input-group-addon">
                                                    <i className="icon-lock"></i>
                                                </span>
                                                <input type="password"
                                                    className=""
                                                    placeholder="Password" />
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <button type="button"
                                                        className="btn btn-primary px-2">
                                                        Sign Up
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}