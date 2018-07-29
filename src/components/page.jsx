import React from 'react';

export default class Page extends React.Component {
	
	constructor(props) {
		
		super(props);
		this.defaultProps = {};
		this.defaultProps.sample = 1;
		
	}
	
	static logic(int) {
		
		return int;
		
	}
	
	render() {
		
		Page.logic(this.defaultProps.sample);
		return <h1>Heading</h1>;
		
	}
	
}
