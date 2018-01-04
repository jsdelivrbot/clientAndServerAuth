//redux promise? we want something with more power 
import axios from 'axios';
//import {browserHistory} from 'react-router';
import history from '../components/history';

import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE} from './types';


const ROOT_URL = "http://localhost:3090";

export function signinUser({email, password}){
	
//function gives us direct access to dispatch (all powerful function.... gets forwarded to all of our reducers)
	
//can stick all of our logic in here!

//return function that calls redux thunk middleware
return function(dispatch){
//submit email and pw to server
// {email: email,
// password: password}
axios.post(`${ROOT_URL}/signin`, {email, password})

.then((response) => {


//IF REQUEST IS GOOD.... we need to update state, to indicate that user is authenticated
dispatch({type: AUTH_USER});


//save JWT so users can make followup requests to the backend
//toss it into local storage
localStorage.setItem('token', response.data.token);


//finally, redirect to the route '/feature'
	history.push('/feature');

}).catch(()=>{

dispatch(authError('Bad login information'));

//IF REQUEST IS BAD.... show an error to the user
console.log('bad rube');

});

	}
}

export function signupUser({email, password}){

	return function(dispatch){

		axios.post(`${ROOT_URL}/signup`, {email, password}).then((response) =>{
			dispatch({type: AUTH_USER});
			localStorage.setItem('token', response.data.token);
			history.push('/feature');
//			this.props.history.push("/feature");
		})
		//.catch((response)=>{dispatch(authError(response.data.error))});
	.catch(({ response }) => {
  dispatch(authError(response.data.error));
	}
);
}
}

export function authError(error){
	return {
	type: AUTH_ERROR,
	payload: error
}
}

export function signoutUser(){

	//"destroy" JWT token the client was using 
	localStorage.removeItem('token');

return {
	type: UNAUTH_USER
}
}

export function fetchMessage() {
    return function(dispatch) {
        axios.get(ROOT_URL, {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: response.data.message
                })
            })
    }
}







