//@flow
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signUp } from './../actions/actions_authentication';

import type { FormProps, FieldProps } from 'redux-form'

type Values = { email:string, password: string };

type RenderFieldProps = { 
    label: string,
    type: string, 
    placeholder: string 
} & FieldProps;

type Props = { 
    signUp(email: string, password: string): Function 
} & FormProps;

type SignUpState = { auth: { auth: boolean }, error: {} | null };

class SignUp extends Component {
    props: Props;

    renderField(field: RenderFieldProps) {
        const { meta: { touched, error } }: RenderFieldProps = field;
        //let err = this.props.error;
        const className = `form-control ${ touched && error ? 'has-danger' : ''}`;

        return (
            <div className={` form-group mb-1`}>
                <label>
                    {field.label}
                </label>
                <div className="input-group">
                    <span className="input-group-addon">
                        <i className="icon-user"></i>
                    </span>
                    <input 
                    type={field.type}
                    className={className}
                    placeholder={field.placeholder}
                    {...field.input}
                    />
                    <div className="text-help">
                        {touched ? error : ''}
                    </div>
                </div>
            </div>
        );
    }

    onSubmit(values: Values): void {
        let { email, password } = values;
        this.props.signUp(email, password);
    }

    render() {
        let { handleSubmit } = this.props;

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
                                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                            <Field
                                            name="email"
                                            label="Email"
                                            type="text"
                                            placeholder="Enter your email address..."
                                            component={this.renderField}/>
                                            <Field
                                            name="password"
                                            label="Password"
                                            type="password"
                                            placeholder="Enter your desired password..."
                                            component={this.renderField} />
                                            <button
                                            className="btn btn-primary px-2"
                                            type="submit">
                                                Sign Up
                                            </button>
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

function validate(values: { glucose: number }) {
    const errors = {};

    if (!values.glucose) {
        errors.glucose = "Enter a Glucose reading.";
    }

    if (values.glucose < 1) {
        errors.glucose = "Glucose reading must be greater than zero.";
    }

    return errors;
}

function mapStateToProps(state: SignUpState): { auth: boolean, error: {} | null } {
    let { auth } = state.auth;

    return {
        auth,
        error: state.error
    };
}

const mapDispatchToProps = {
    signUp
};

export default SignUp = reduxForm({
    validate,
    form:'SignUpForm'
})( connect(mapStateToProps, mapDispatchToProps)(SignUp) );