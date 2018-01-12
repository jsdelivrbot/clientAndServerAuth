import React, {Component} from 'react';

export default class About extends Component{
	render(){

var divStyle={
	color: '#21960e'
};

		return(
<div>
<div className="col-lg-6">
<h2> Engineered to <span style={divStyle}> Help </span> </h2>
<p>The idea for HunkerBunker came about when one of our founders, <a href="https://www.linkedin.com/in/alexandersuglio/"> Alex Suglio</a>, was forced to evacuate his home during Hurricane Irma. With the local shelters filled to capacity, and unable to afford a hotel room, Alex was desperate for a place to go. 
</p>
<p> It was then when a friend on Facebook shared a post, advertising a spare couch to stay on, that the idea came to him. Thus HunkerBunker was born.
</p>
<p>
Designed to bring people together in times of crisis and emergency, HunkerBunker is a unique platform for people to offer up spare rooms and space in their homes during a storm or other natural disaster.
</p>
<p>
Launched in 2018, HunkerBunker strives to bring out the best in people when it really matters. 
</p>
</div>
</div>
			);
	}
}