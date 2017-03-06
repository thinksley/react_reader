import React from 'react';
import ReactDom from 'react-dom';
import Index from './components/index';
import Book from './components/book';
import Result from './components/result';

import {Router,Route,Link,hashHistory,browserHistory} from 'react-router';

export default class Root extends React.Component{
	render(){
		return(
				<div>
					<Router history={hashHistory}>
						<Route path="/" component={Index}></Route>
						<Route path="/book/:id" component={Book}></Route>
						<Route path="/result/:keyword" component={Result}></Route>
					</Router>				    
				</div>
			)
	}
}

ReactDom.render(<Root />,document.getElementById('app'))