import React from 'react';
import {Router,Route,Link} from 'react-router';

export default class IndexRecommend extends React.Component{
	constructor(){
		super();
		this.state={
			recommend:''
		}
	};

	componentDidMount(){
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://127.0.0.1:3001/ajax/index", myFetchOptions)
		.then(response => response.json())
		.then(json =>this.setState({recommend:json.items[2].data.data}))
	};

	render(){
		
		const {recommend}=this.state;
		const recommendList=recommend.length 
		? recommend.map((recommendItem,index)=>{
		if(index==0){
			return (
					<li>
					  <Link to={`book/${recommendItem.fiction_id}`}>
						<div className="book-h5">
							<div className="book-h5__cover">
								<img alt={recommendItem.title} src={recommendItem.cover} />
								<p className="book-h5__finish">完结</p>
							</div>
							<div className="book-h5__info">
								<p className="book-h5__title">{recommendItem.title}</p>
								<p className="book-h5__author">{recommendItem.authors}</p>
								<p className="book-h5__summary">{recommendItem.summary}</p>
								<div className="book-h5__wrap">
									{
										recommendItem.tags.map((tag,index)=>(
												<div className="book-h5__tag">{tag}</div>
											))
									}
								</div>
							</div>
						</div>
						</Link>
					</li>
				)
		}else if(index>0 && index<9){
			return(
					<li >
						<Link to={`book/${recommendItem.fiction_id}`}>
						<div className="book-h5 book-h5__no-img">
							<span className="book-h5_no-img__order">0{index }</span>
							<div className="book-h5_no-img__info">
								<p className="book-h5_no-img__title">
									{recommendItem.title}
								</p>
							</div>
						</div>
						</Link>
					</li>	
				)
		}

			
		})
		:'暂无数据！';

		return(
				<section className="channel-h5">
					<div className="channel-h5__header">
						<p className="channel-h5__title">
							重磅推荐<i>推</i>
						</p>
						<div className="tab">
							<a href="javascript:" className="tab__on">男</a>
							<a href="javascript:">女</a>
						</div>
					</div>
					<ul className="list-h5">
						{recommendList}
					</ul>
				</section>
			)
	}
}