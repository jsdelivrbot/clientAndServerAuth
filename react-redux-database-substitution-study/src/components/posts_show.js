import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostsShow extends Component{
	componentDidMount(){

	//give to us from react router	
	const {id} = this.props.match.params;
	this.props.fetchPost(id);
	}

onDeleteClick() {
const {id} = this.props.match.params;

this.props.deletePost(id, () =>{this.props.history.push('/')});



}

	render(){

	const {post} = this.props;

if (!post){
	return <div> fetching...</div>;
}

	return(
	<div>
		<button

className="btn-danger"
onClick={this.onDeleteClick.bind(this)}

		> Delete Post </button>

	<h3> {post.title} </h3>
	<p> {post.categories} </p>
	<p> {post.content} </p>
<Link
to="/"
>
Back
</Link>

	</div>
		);
	}
}

function mapStateToProps({posts}, ownProps){
return {post: posts[ownProps.match.params.id]};

}

export default connect(mapStateToProps, {fetchPost: fetchPost, deletePost: deletePost})(PostsShow);