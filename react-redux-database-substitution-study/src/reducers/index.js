import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import PostsListReducer from './reducer_Posts';


const rootReducer = combineReducers({

posts: PostsListReducer,
form: formReducer
});

export default rootReducer;
