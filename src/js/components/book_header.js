import React from 'react';
import '../../css/detail_header.css';

export default class BookHeader extends React.Component{
	render(){
		return(
			<div className="top">
				<a className="top__back" href="/"></a>
				<span className="top__title">{this.props.title}</span>
				<a className="header-home" href="/"></a>
			</div>

			)
	}
}