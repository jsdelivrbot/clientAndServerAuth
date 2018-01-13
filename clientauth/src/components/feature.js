//list of tweets or main page
import React, {Component} from 'react';
import * as actions from '../actions';
import PropTypes from "prop-types";

import {connect} from 'react-redux';

import Other from './otherFeature';

//import Test from '../actions/index';

const idk = localStorage.getItem('username');
console.log("password is: " + idk);

class Feature extends Component{
	static propTypes = {
        fetchMessage: PropTypes.func,
        message: PropTypes.string
    };

    componentWillMount() {
        this.props.fetchMessage();
    }

	render(){
		return(
<div>
<div> Welcome! {idk} THIS WILL BE THE MAIN PAGE </div>

<Other/>
 
</div> 
			);
	}
}

function mapStateToProps(state){

return {
  message:state.auth.username

};
}

export default connect(mapStateToProps, actions)(Feature);


// <div> {this.props.message}</div>