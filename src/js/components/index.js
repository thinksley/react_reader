import React from 'react';
import Header from './header';
import IndexTop from './index_top';
import IndexHot from './index_hot';
import IndexRecommend from './index_recommend';
import IndexFemale from './index_female';
import IndexMale from './index_male';
import IndexFree from './index_free';
import IndexBottom from './index_bottom';
import Self from './self';
import Search from './search';

import {Router, Route, Link, browserHistory} from 'react-router'

export default class Index extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			tab_1_class: 'Swipe-tab__on',
			tab_2_class:'',
			doubleWinWidth:2*document.body.clientWidth,
			winWidth:document.body.clientWidth,
			header_position:0,
			index_header_tab_width:0,
			index_position:0
			
		};
	};

	componentDidMount(){
		var _tab_a_width=document.getElementById('J_tab_a').clientWidth;
		this.setState({
			index_header_tab_width:_tab_a_width
		})
	}
	
	handleClick(idx,event) {
		
		const _tab_a_width=document.getElementById('J_tab_a').clientWidth;
		
		if(idx==0){
			this.setState({
				tab_1_class:'Swipe-tab__on',
				tab_2_class:'',
				header_position : 0,
				index_position:0
			})
		}else if(idx==1){
			this.setState({
				tab_1_class:'',
				tab_2_class:'Swipe-tab__on',
				header_position : _tab_a_width,
				index_position:-this.state.winWidth
			})
		}
		
	};

	render(){
		
		return(
			    <div style={{width:this.state.winWidth+'px',overflow:'hidden'}}>
					<Header 
					       handleClick={this.handleClick.bind(this)} 
					       tab_1_class={this.state.tab_1_class} 
					       tab_2_class={this.state.tab_2_class} 
					       header_position={this.state.header_position} 
					       index_header_tab_width={this.state.index_header_tab_width}  />
					<Search/>      
					<div style={{width:this.state.doubleWinWidth+'px',overflow:'hidden',transitionDuration:'.5s',transform:'translate3d('+this.state.index_position+'px,0px,0px)'}}>
						<div className="container-warp" style={{width:this.state.winWidth+'px',float:'left'}}>
							<div className="container-scroll" style={{top:'0px'}}>
								<IndexTop/>
							    <IndexHot/>
							    <IndexRecommend/>
							    <IndexFemale/>
							    <IndexMale/>
							    <IndexFree/>
							    <IndexBottom/>
							</div>
						</div>	
						<div style={{width:this.state.winWidth+'px',float:'left'}}>
							<Self/>
						</div>
						
					</div>
				</div>
				
			)
	}
}
