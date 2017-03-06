import React from 'react';
import BookHeader from './book_header';
export default class Book extends React.Component{
	constructor(){
		super();
		//数据不要嵌太深层次
		this.state={
			item:'',
			related:[],
			author_books:[],
			tags:[]
		}
	}

	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://127.0.0.1:3001/ajax/book?id="+this.props.params.id, myFetchOptions)
		.then(response => response.json())
		
		.then(json =>this.setState({item:json.item,related:json.related,author_books:json.author_books,tags:json.item.tags}))
		
	};

	render(){
		const {tags}=this.state;
		const {author_books}=this.state;
		const {related}=this.state;
		const tagList=tags.map((tagItem,index)=>(
				<li className="u-tag" >{tagItem.title}</li>
			))

		const authorBooksList=author_books.map((item,index)=>(
			    <li>
				<div className="u-book -vertical">
                    <div className="book-cover">
                        <img title={item.title } src={item.cover}/>
                    </div>
                    <div className="info">
                        <h3 className="title">{item.title }</h3>
                    </div>
                </div>
                </li>
			))

		const relatedList=related.map((item,index)=>(
				<li >
                    <div className="u-book -vertical">
                        <div className="book-cover">
                            <img title={item.title } src={item.cover}/>
                        </div>
                        <div className="info">
                            <h3 className="title">{item.title }</h3>
                        </div>
                    </div>
                </li>
			))

		return(
			<div>
				<BookHeader title="书籍正文"/>
				<div className="container-scroll" style={{width:'375px'}}>
	                <div className="book-page">
	                    <section className="main-card" >
	                        <div className="u-book -detail">
	                            <div className="book-cover">
	                                <img src={this.state.item.cover}  />
	                            </div>
	                            <div className="info">
	                                <h3 className="title">{this.state.item.title}</h3>
	                                <p className="author">
                                    	<span className="author">{ this.state.authors }</span>
	                                </p>
	                                <div className="u-grade">
	                                    <span className="read">{this.state.score_count } 个评价</span>
	                                </div>
	                                <p className="price">价格：{ this.state.price }书币／千字</p>
	                                <p className="count">
	                                    字数:{ this.state.word_count }字
	                                    <span className="u-booktag -serial">连载中</span>
	                                </p>
	                            </div>
	                        </div>
	                    </section>
	                    <section className="main-card">
	                        <div className="book-dash">
	                            <div className="wrap">
	                                <ul className="btn-group">
	                                    <li className="u-btn2" >
	                                        <span className="book-dash-text"></span>
	                                    </li>
	                                </ul>
	                            </div>
	                        </div>
	                        <div className="u-folder">
	                            <div className="folder-cnt">
	                                {this.state.item.content }
	                            </div>
	                            <div className="folder-tail">
	                                <div>最新：{ this.state.item.lastest }</div>
	                            </div>
	                        </div>
	                    </section>
	                    <section className="main-card">
	                        <div className="u-folder">
	                            <div className="folder-top">
	                                <h3>类别标签</h3>
	                            </div>
	                            <div className="folder-cnt">
	                                <ul className="m-tag -color">
	                                    
	                                    {tagList}
	                                    
	                                </ul>
	                            </div>
	                        </div>
	                    </section>
	                    <section className="main-card">
	                        <div className="u-title">
	                            <h1>作者的其他作品</h1>
	                        </div>
	                        <div className="cnt">
	                            <ul className="book-table">
	                                {authorBooksList}
	                            </ul>
	                        </div>
	                    </section>
	                    <section className="main-card">
	                        <div className="u-title">
	                            <h1>喜欢本书的人也喜欢</h1>
	                        </div>
	                        <div className="cnt">
	                            <ul className="book-table">
	                                {relatedList}
	                            </ul>
	                        </div>
	                    </section>
	                    <section className="main-card -folder">
	                        <div className="u-title">
	                            <h1>图书信息</h1>
	                        </div>
	                        <div className="cnt">
	                            <ul className="text">
	                                <li>版权：{ this.state.item.rights }</li>
	                            </ul>
	                        </div>
	                    </section>
	                </div>
	            </div>
			</div>
			)
	}
}