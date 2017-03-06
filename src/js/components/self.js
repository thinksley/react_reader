import React from 'react';

export default class Self extends React.Component{

	render(){

		return(
				<div className="shelf">
					
					<ul className="book-list">
						<li>
							<div className="u-book">
								<a>
									<div className="book-cover">
										<img alt="盗墓笔记" src="http://cover.read.duokan.com/mfsv2/download/s010/p01yfPOuJRok/dQJSYfAnD3AB42.jpg!s" />
									</div>
								</a>
								<div className="info">
									<h3 className="title">盗墓笔记</h3>
									<p className="author">
										<span className="author">南派三叔</span>
									</p>
									<div className="wrap">
										<p>最新:《后记》</p>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div className="u-book">
								<a>
									<div className="book-cover">
										<img alt="盗墓笔记" src="http://cover.read.duokan.com/mfsv2/download/s010/p01yfPOuJRok/dQJSYfAnD3AB42.jpg!s" />
									</div>
								</a>
								<div className="info">
									<h3 className="title">盗墓笔记</h3>
									<p className="author">
										<span className="author">南派三叔</span>
									</p>
									<div className="wrap">
										<p>最新:《后记》</p>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			)
	}
}