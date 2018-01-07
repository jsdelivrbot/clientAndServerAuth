import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {createPost} from '../actions';

class PostsNew extends Component{

renderField(fieldObject){

const touchTernary = `form-group ${fieldObject.meta.touched && fieldObject.meta.error ? 'has-danger': " "}`;

return(
<div className={touchTernary}>
<label> {fieldObject.fieldLabel} </label>
<input 
className="form-control "
type="text"
//use the ... operator to save yourself from having to individually wire up EVERY single differen on-something events
//onChange = {fieldObject.input.onChange}
//onFocus = {fieldObject.input.onFocus}
//onBlur = {fieldObject.input.onBlur}
{...fieldObject.input}
/>

<div className="text-help">
{fieldObject.meta.touched ? fieldObject.meta.error: " "}
</div>
</div>
	);
}
onSubmit(values){
 
	console.log(values);
	this.props.createPost(values, ()=>{
	this.props.history.push('/');
	});
}


render(){
//property passed to component on behalf of redux-form
const {handleSubmit} = this.props;

return(
//redux form is just rersposivble for handling state on submit
//not back end calls
//redux form side of things
//our side of things, taking this data and submitting it to some backend data

//call .bind(this) becuase we are passing this.onSubmit as a callback that will be executed in some different context outside of our component, 
<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

<Field 
fieldLabel="Title"
name="title"
component={this.renderField}

/>
<Field
fieldLabel="Categories"
name="categories"
component={this.renderField}

/>
<Field
fieldLabel="content"
name="content"
component={this.renderField}

/>
<button type="submit" className="btn btn-primary"> Submit </button>
<Link className="btn btn-primary"
to="/"
>
Cancel
</Link>

	</form>
	);
	}
}


function validate(values){

//create errors object, 'empty'
const errors = {};

//validate the inputs from 'values'
if (!values.title || values.title.length < 3){
	errors.title = "Enter a title!";
}
if (!values.categories){
	errors.categories = "enter a category!";

}
if (!values.content){
	errors.content = "enter some text!";
}
//if errors is empty, form is fine to submit
//if errors has any properties redux form assums form is invalid
return errors;
}


//make sure this string 'PostsNewForm' assigned to form property is unique
export default reduxForm({
	validate: validate,
	form: 'PostsNewForm'
})(
connect(null, {createPost: createPost})(PostsNew)
);
