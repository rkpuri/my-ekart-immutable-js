import React, {Component} from 'react';
import Header from '../header/Header';
import CategoryList from '../category/CategoryList';

class Karthome extends Component {
	render() {
		return(
			<div>
				<Header />
				<CategoryList />
			</div>
		);
	}
}
export default Karthome;