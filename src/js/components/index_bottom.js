import React from 'react';

export default class IndexHot extends React.Component{

	render(){
		return(
				<section className="banner-h5">
					<div className="channel-h5__header">
						<p className="channel-h5__title channel-group__title_left">
							精选专题 <i>热</i>
						</p>
					</div>
					<ul className="banner-h5__list">
						<div>
							<li>
								<div className="banner-h5__cover">
									<img className="cover" src="http://image.read.duokan.com/mfsv2/download/fdsc3/p01cjtwdtMY9/vOmsMitEMiFJmW.jpg" /></div>
							</li>
							<li>
								<div className="banner-h5__cover">
									<img className="cover" src="http://image.read.duokan.com/mfsv2/download/fdsc3/p01cjtwdtMY9/vOmsMitEMiFJmW.jpg" /></div>
							</li>
						</div>
					</ul>
					<div className="channel-h5__footer">
						<a className="btn-h5__more">更多精彩专题&gt;&gt;</a>
					</div>
				</section>
			)
	}
}
