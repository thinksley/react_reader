import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'

export default class Details extends React.Component{
	constructor(){
		super();
		this.state={
			detail:''
		}
	};
	

	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://127.0.0.1:3001/ajax/ndappdetail?docid="+this.props.params.docid, myFetchOptions)
		.then(response => response.json())
		.then(json => {
			console.log(json)
			this.setState({detail:json.data})
		});
	};

	createMarkup() {
		return {__html: this.state.detail.content};
	};

	render(){


		return(
				<div>
				    
				    <div id="TitleSection"><h2 className="rich_media_title">{this.state.detail.title}</h2></div>

				    <div id="BodySection" >
				    	<div className="post-cont" dangerouslySetInnerHTML={this.createMarkup()}></div>
				    </div>
				</div>
				
			)
	}
}
