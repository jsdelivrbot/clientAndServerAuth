//handle whether or not the user is Authenticated

//switch statement
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE} from '../actions/types';


export default function(state ={}, action ){
	switch(action.type){
case AUTH_USER:
return {...state, error: " ", authenticated: true};
	
	break;
case UNAUTH_USER:
return {...state, authenticated: false}

break;
case AUTH_ERROR:
return {...state, error: action.payload }
break;

case FETCH_MESSAGE:
return { ...state, mess: action.payload}

default:
return state;
}
}

