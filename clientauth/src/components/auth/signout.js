import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';


class Signout extends Component{
	
//as soon as this component is about to be rendered... log this user out!
componentWillMount(){
	this.props.signoutUser();

}

render(){
return(
<div>
sorry to see you go!
</div>
			);
	}
}


export default connect(null, actions)(Signout);
