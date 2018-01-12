import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux'; 
import * as actions from "../../actions";

class Signin extends Component {
	handleFormValues({email, password}){
   console.log(email, password);
  this.props.signinUser({email, password}, this.props.history);
  };


  renderInput({ label, ...field }) {
//  	console.log(label, ...field);
	
	//var a = document.querySelector("input.form-control");
if (label === "Password"){
	//a.setAttribute("type", "password");
	return (
		<div>
  <fieldset className="form-group">
        <label>
          {label}:
        </label>
        <input {...field.input} type="password" className="form-control" />
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
      </fieldset>
    );

  }

  renderAlert(){
  	if (this.props.errorMessage){
  		return(
<div>
{this.props.errorMessage}
</div>
  			)
  	}
  }

  render() {
  	//comes from redux form
const {handleSubmit, fields: {username, email, password}} = this.props; 
    
    return (

      <form onSubmit={handleSubmit(this.handleFormValues.bind(this))}>
      <Field name="username" component={this.renderInput} label="Username" />
        <Field name="email" component={this.renderInput} label="Email" />
        <Field name="password" component={this.renderInput} label="Password" />
        {this.renderAlert()}
        <button className="btn btn-primary" action="submit">
          Sign in
        </button>
      </form>
    );
  }
}


//has to match reducer in.reducers
//export default reduxForm({ form: 'signin', fields: ['email', 'password'] }, null, actions)(Signin);

function mapStateToProps(state){
	return{errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['username', 'email', 'password']
})(
  connect(mapStateToProps, actions)(Signin)
);



















