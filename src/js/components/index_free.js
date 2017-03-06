import React from 'react';
import {Router,Route,Link} from 'react-router';

export default class IndexFree extends React.Component{
	constructor(){
		super();
		this.state={
			free:''
		}
	}

	componentDidMount(){
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://127.0.0.1:3001/ajax/index", myFetchOptions)
		.then(response => response.json())
		.then(json =>this.setState({free:json.items[5].data.data}))
	}

	render(){
		const {free}=this.state;
		const freeList=free.length
		? free.map((freeItem,index)=>
				<li key={index}>
					<Link to={`book/${freeItem.fiction_id}`}>
						<div className="u-book -vertical">
							<div className="book-cover">
								<img src={freeItem.data.cover}/>
								<div className="u-tagRT -freefiction"></div>
							</div>
							<div className="info">
								<h3 className="title">{freeItem.ad_name}</h3>
							</div>
						</div>
					</Link>
				</li>
			)
		:'暂无数据！';

		return(
				<section className="channel-group main-card">
					<div className="channel-group__header">
						<h2 className="channel-group__title channel-group__title_left">限时免费</h2>
					</div>
					<ul className="book-table">
						{freeList}
					</ul>
					<a className="channel-group__footer" >更多限免佳作&gt;&gt;</a>
				</section>	
			)
	}
}