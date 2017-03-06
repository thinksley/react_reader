import React from 'react';

export default class IndexTop extends React.Component{

	render(){
		

		return(
				<section className="top-home">
			    	
			    	<div className="slider-banner">
			    		<div>
			    			<a href="http://dushu.xiaomi.com/#page=channel&id=410">
			    				<img className="cover" src="http://image.read.duokan.com/mfsv2/download/fdsc3/p01tBqnupVze/qayTXiXrMm1lVm.jpg"/>
			    			</a>
			    		</div>
			    	</div>
			    	<ul className="top-home__btn">
			    		<li>
			    			<a href="/male">
			    				<img className="top-home__icon" src="/src/img/male.png" />
			    				<p className="top-home__des">男生</p>
			    			</a>
			    		</li>
			    		<li>
			    			<a href="/female">
			    				<img className="top-home__icon" src="/src/img/female.png" />
			    				<p className="top-home__des">女生</p>
			    			</a>
			    		</li>
			    		<li>
			    			<a href="/category">
			    				<img className="top-home__icon" src="/src/img/category.png" />
			    				<p className="top-home__des">分类</p>
			    			</a>
			    		</li>
			    		<li>
			    			<a href="/rank">
			    				<img className="top-home__icon" src="/src/img/rank.png" />
			    				<p className="top-home__des">排行</p>
			    			</a>
			    		</li>
			    	</ul>
			    </section>
			)
	}
}

