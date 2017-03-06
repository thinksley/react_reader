import React from 'react';
import {Router,Route,Link} from 'react-router';

export default class IndexFemale extends React.Component{
	constructor(){
		super();
		this.state={
			female:''
		}
	}

	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://127.0.0.1:3001/ajax/index", myFetchOptions)
		.then(response => response.json())
		.then(json =>this.setState({female:json.items[3].data.data}))
		
	};

	render(){
		const {female}=this.state;
		const femaleList=female.length
		? female.map((femaleItem,index)=>{
			if(index<3){
				return(
					<li>
						<Link to={`book/${femaleItem.fiction_id}`}>
							<div className="book-h5" >
								<div className="book-h5__cover">
									<img src={femaleItem.cover} />
									<div className="u-tagRT"></div>
									<p className="book-h5__finish">完结</p>
								</div>
								<div className="book-h5__info">
									<p className="book-h5__title">{femaleItem.title}</p>
									<p className="book-h5__author">
										<span className="author">{femaleItem.authors}</span>
									</p>
									<p className="book-h5__summary">{femaleItem.summary}</p>
									<div className="book-h5__wrap">
										{
											femaleItem.tags.map((tag,index)=>(
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
						<p className="channel-h5__title channel-group__title_left">女生最爱</p>
					</div>
					<div className="Fade list-h5__wrap">
						<div >
							<ul className="list-h5">
								{femaleList}
							</ul>
						</div>
					</div>
					<div className="channel-h5__footer_next">
						<a className="btn-h5__next" href="javascript:">换一换</a>
						<a className="btn-h5__more" href="/female">女生频道</a>
					</div>
				</section>
			)
	}
}