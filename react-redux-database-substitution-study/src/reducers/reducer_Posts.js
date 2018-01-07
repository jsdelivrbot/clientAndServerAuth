import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST} from '../actions';


//Key Value Pairs Example 
// const dogs = {
//	4: {name: 'ruby', id: 4, breed: 'pug'},
//  13: {name: 'tutu', id: 13, breed: 'poodle'}
//}
//}


//however we're given information as an array of objects 
//we have to massage the data to fit our application

//we can utilize lodash's '_.mapKeys' operation 

//_.mapKeys helps us ga

//recieve previous state
export default function(state = {}, action){
	switch (action.type){
		case FETCH_POST:
		const post = action.payload.data;

		const newState = { ...state};
		newState[post.id] = post;
		console.log(newState);
		return newState;

//key value interpolation es6 (will research later)
//return {...state, [action.payload.data.id]: action.payload.data};

		case FETCH_POSTS:
	return _.mapKeys(action.payload.data, 'id');
//console.log(action.payload.data);
		default:
		return state;
	}
}