import React from 'react';
import {Router,Route,Link} from 'react-router';

export default class IndexHot extends React.Component{
	constructor(){
		super();
		this.state={
			hot:''
		}
	}

	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://127.0.0.1:3001/ajax/index", myFetchOptions)
		.then(response => response.json())
		.then(json =>this.setState({hot:json.items[1].data.data}))
		
	};


	render(){
		const {hot}=this.state;
		const hotList = hot.length
			? hot.map((hotItem, index) => (
        		<li key={index}>
        			<div className="book-h5">
        			    <Link to={`book/${hotItem.fiction_id}`}>
        				
        					<div className="book-h5__cover">
        						<img alt={hotItem.title} src={hotItem.cover} />
        						<p className="book-h5__finish">完结</p>
        					</div>
        					<div className="book-h5__info">

        						<p className="book-h5__title">{hotItem.title}</p>
        						<p className="book-h5__author">{hotItem.authors}</p>
        						<p className="book-h5__summary">{hotItem.summary}</p>
        						<div className="book-h5__wrap">
    							
    								{
    									hotItem.tags.map((tag,index)=>(
    											<div className="book-h5__tag">{tag}</div>
    										))
    								}
        							
        						</div>
        					</div>
        				
        				</Link>
        			</div>
        		</li>
			))
			: '暂无数据!';

		return(
				<section className="channel-h5">
					<div className="channel-h5__header">
						<p className="channel-h5__title">本周最火</p>
					</div>
					<ul className="list-h5">
						{hotList}
					</ul>
				</section>
			)
	}
}