import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'

export default class Search extends React.Component{
	
	handelClick(event){
		event.preventDefault()
		var _keyword=document.getElementById('J_val').value;
		this.setState({keyword:_keyword});
		
		var path = `#/result/${_keyword}`;

		 //browserHistory.push(path)  //失败
		 window.location.href=path;
		 console.log(path)
	}

	render(){
		return(
			<div className="shelf__top">
				<div className="shelf__switch" onClick={this.handelClick.bind(this)}>确定</div>
				<a href="javascript:;">
					<input id="J_val" className="shelf-search" placeholder="输入书名/作者/关键字" />
				</a>
			</div>

			)
	}
}