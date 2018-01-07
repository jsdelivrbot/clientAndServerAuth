import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';


const ROOT_URL = 'http://localhost:3008';

//const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
//const API_KEY = '?key=redmustard1234';


//needs to reach out to outside API
//need a network request inside an action creator

//axios AJAX client
//redux promise (middleware)...handle asynchronous nature of the request itself 
export function fetchPosts(){

const request = axios.get(`${ROOT_URL}/posts`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(values, callback){
	const request = axios.post(`${ROOT_URL}/posts`, values).then(()=> { return callback() });

	return {
		type: CREATE_POSTS,
		payload: request
	}
}

export function fetchPost(id){
	const request = axios.get(`${ROOT_URL}/posts/${id}`);

	return {
		type: FETCH_POST,
		payload: request
	}
}

export function deletePost(id, callback){
	const request = axios.delete(`${ROOT_URL}/posts/${id}`, id).then(()=> {return callback() });

	return {
		type: DELETE_POST,
		payload: id
	}
}