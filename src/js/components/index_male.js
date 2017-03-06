import React from 'react';
import {Router,Route,Link} from 'react-router';

export default class IndexMale extends React.Component{
	constructor(){
		super();
		this.state={
			male:''
		}
	}

	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://127.0.0.1:3001/ajax/index", myFetchOptions)
		.then(response => response.json())
		.then(json =>this.setState({male:json.items[4].data.data}))
		
	};

	render(){
		const {male}=this.state;
		const maleList=male.length
		? male.map((maleItem,index)=>{
			if(index<3){
				return(
					<li>
						<Link to={`book/${maleItem.fiction_id}`}>
							<div className="book-h5" >
								<div className="book-h5__cover">
									<img src={maleItem.cover} />
									<div className="u-tagRT"></div>
									<p className="book-h5__finish">完结</p>
								</div>
								<div className="book-h5__info">
									<p className="book-h5__title">{maleItem.title}</p>
									<p className="book-h5__author">
										<span className="author">{maleItem.authors}</span>
									</p>
									<p className="book-h5__summary">{maleItem.summary}</p>
									<div className="book-h5__wrap">
										{
											maleItem.tags.map((tag,index)=>(
													<div className="book-h5__tag">{tag}</div>
												))
										}
									</div>
								</div>
							</div>
						</Link>
					</li>
					)
			}
		})
		:'暂无数据！';

		return(
				<section className="channel-h5 channel-h5_next">
					<div className="channel-h5__header">
						<p className="channel-h5__title channel-group__title_left">男生最爱</p>
					</div>
					<div className="Fade list-h5__wrap">
						<div >
							<ul className="list-h5">
								{maleList}
							</ul>
						</div>
					</div>
					<div className="channel-h5__footer_next">
						<a className="btn-h5__next" href="javascript:">换一换</a>
						<a className="btn-h5__more" href="/male">男生频道</a>
					</div>
				</section>
			)
	}
}