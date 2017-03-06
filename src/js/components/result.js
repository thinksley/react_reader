import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
import Search from './search';

export default class Result extends React.Component{
	constructor(){
		super();
		this.state={
			res:[]
		}
	}

	componentDidMount(){
		var myFetchOptions = {
			method: 'GET'
		};

		fetch("http://127.0.0.1:3001/ajax/search?keyword="+this.props.params.keyword, myFetchOptions)
		.then(response => response.json())
		.then(json =>this.setState({res:json.items}))
	}
	

	render(){
		const {res}=this.state;
		const resList=res.length
		? res.map((resItem,index)=>(
				<li>
					<div  className="u-book">
						<Link to={`book/${resItem.id}`}>
							<div className="book-cover">
								<img alt={resItem.title} src={resItem.cover} />
							</div>
						</Link>
						<div className="info">
							<h3 className="title">{resItem.title}</h3>
							<p className="author">
								<span className="author">{resItem.role}</span>
							</p>
							<div className="wrap">
								<p>{resItem.intro}</p>
							</div>
						</div>
					</div>
				</li>
			))
		: '暂无数据！';

		return(
			<div>
				<Search/>
				<div className="shelf">
					
					<ul className="book-list">
						{resList}
						
					</ul>
				</div>
			</div>
			

			)
	}
}