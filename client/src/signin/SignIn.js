import React, { Component } from 'react';

class SignIn extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleEmailChange(event) {
        let { value } = event.target;
        this.setState(() => {
            return { email: value } 
        });
    }

    handlePasswordChange(event) {
        let { value } = event.target;
        this.setState(() => {
            return { password: value } 
        });
    }

    render() {
        let { signUp, logIn, error } = this.props;
        let { email, password } = this.state;

        let warning = error ? "Username or password invalid" : "";
        let formGroupHasDanger = error ? "input-group has-danger" : "input-group";
        let formDangerCss = error ? "form-control form-control-danger" : "form-control";

        return (
            <div className="app flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card-group mb-0">
                                <div className="card p-2">
                                    <div className="card-block">
                                        <h1>Login</h1>
                                        <p className="text-muted">
                                            Sign In to your account
                                        </p>
                                        <p className="text-danger">
                                            {warning}
                                        </p>
                                        <div className={`${formGroupHasDanger} mb-1`}>
                                            <span className="input-group-addon">
                                                <i className="icon-user"></i>
                                            </span>
                                            <input type="text" 
                                            className={formDangerCss} 
                                            placeholder="Email" 
                                            value={email}
                                            onChange={(e) => this.handleEmailChange(e)}/>
                                        </div>
                                        <div className={`${formGroupHasDanger} mb-2`}>
                                            <span className="input-group-addon">
                                                <i className="icon-lock"></i>
                                            </span>
                                            <input type="password" 
                                            className={formDangerCss} 
                                            placeholder="Password" 
                                            value={password}
                                            onChange={(e) => {this.handlePasswordChange(e)}}/>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <button type="button" 
                                                className="btn btn-primary px-2"
                                                onClick={() => logIn(email, password)}>
                                                    Login
                                                </button>
                                            </div>
                                            <div className="col-6 text-right">
                                                {/*<button type="button" className="btn btn-link px-0">
                                                    Forgot password?
                                                </button>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-inverse card-primary py-3 hidden-md-down" style={{width: '44%'}}>
                                    <div className="card-block text-center">
                                        <div>
                                        <h2>Sign up</h2>
                                            <p>
                                                Create an account!
                                            </p>
                                            <button type="button" 
                                            className="btn btn-primary active mt-1"
                                            onClick={() => signUp()}>
                                                Register Now!
                                            </button>
                                        </div>
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

export default SignIn;