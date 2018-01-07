import React, {Component} from 'react';
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';

import _ from 'lodash';
//import {bindActionCreators} from 'redux'; 
class PostIndex extends Component{
componentDidMount(){
this.props.fetchPosts();
}


renderPosts(){
//if a regular array of objects like in the past, the following would work. 
//but we are working with key value pairs of data, we gotta use Lodash's _.map function
//	return this.props.posts.map((postData)=> { 
//		return( <div> <li> {this.postData.categories} </li> </div>);
//});

return _.map(this.props.posts, (postData)=> {
	return( <div> <Link to={`/posts/${postData.id}`}> <li key={postData.id}> {postData.title} </li> </Link> </div>); 
});

}

render(){
	//console.log(this.props.posts);
return(
<div>
<div className="text-xs-right">
<Link className="btn btn-primary" to="/posts/new">
Add a new post
</Link>

</div>
<ul>
{this.renderPosts()}
</ul>
</div>);
	}
}


function mapStateToProps(state){
	return {
		posts: state.posts
	};
}
//function mapDispatchToProps(dispatch){
//	return bindActionCreators({pickaDog: pickaDog}, dispatch);
//};

//not passing map state to props         //in lieu of mapDispatchToProps
export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostIndex);