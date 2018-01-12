import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux'; 

import * as actions from '../../actions';

class SignUp extends Component{
	handleFormSubmit(formProps){
//call action creator to sign up the user!

this.props.signupUser(formProps);

	}

  renderInput({ label, ...field }) {
//  	console.log(label, ...field);
	//var a = document.querySelector("input.form-control");
if (label === "Password" || label === "Password Confirm"){
	//a.setAttribute("type", "password");
	return (
		<div>
  <fieldset className="form-group">
        <label>
          {label}:
        </label>
        <input {...field.input} type="password" className="form-control" />
      {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
      </fieldset>
</div>
		);
}

    return (
      <fieldset className="form-group">
        <label>
          {label}:
        </label>
        <input {...field.input} type="text" className="form-control" />
                  {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
  
      </fieldset>
    );

  }

renderAlert(){
	if (this.props.errorMessage){
		return (
			<div> {this.props.errorMessage} </div>
			);
	}
}
	render(){
			const {handleSubmit, fields: {username, email, password, passwordConfirm }} = this.props;
		return(

        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

        <Field name="username" component={this.renderInput} label="User Name" />
        
        <Field name="email" component={this.renderInput} label="Email" />
        
        <Field name="password" component={this.renderInput} label="Password" />

        <Field name="passwordConfirm" component={this.renderInput} label="Password Confirm" />

{this.renderAlert()}
        <button className="btn btn-primary" action="submit">
          Sign up
        </button>
      </form>

			);
	}
}

//called with all our properties of our form
function validate(formProps){

//new object that contains any errors our fields may contain
const errors = {};

//console.log(formProps);
if (!formProps.username){
  errors.username = "Can't leave username blank";
}
if (!formProps.email){
	errors.email = 'Please enter an email';
}
if (!formProps.password){
	errors.password = 'Please enter a password';
}
if (!formProps.passwordConfirm){
	errors.passwordConfirm = 'Please confirm password';
}

if (formProps.password != formProps.passwordConfirm){
	errors.password = 'Passwords must match!'; 

}

//always return error object even if it's empty 
return errors;

}

function mapStateToProps(state){
	return {errorMessage: state.auth.error};
}


export default reduxForm({
  form: 'signup',
  fields: ['username', 'email', 'password', 'passwordConfirm'],
  validate: validate
})(
  connect(mapStateToProps, actions)(SignUp)
);




