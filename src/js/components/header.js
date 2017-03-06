import React from 'react';

export default class Header extends React.Component{
	

	render(){
		const style={
			width:this.props.index_header_tab_width+'px',
			transitionDuration:'0.5s',
			transform:'translate3d('+this.props.header_position+'px,0px,0px)'
		}
		return(
			<div>
				<div className="header-tab" id="app_header">
			        <div className="Swipe-tab Swipe-tab_2 f-cb">
			            <a href="javascript:" id="J_tab_a" className={this.props.tab_1_class} onClick={this.props.handleClick.bind(this,0)}></a>
			            <a href="javascript:" className={this.props.tab_2_class} onClick={this.props.handleClick.bind(this,1)}></a>
			            <i style={style}></i>
			        </div>
			        <em className="header-user" onclick="location.href='/usercenter'"></em>
			        <em className="header-checkin"></em>
			    </div>
			    
			</div>	
			)
	}
}
