import React, {Component} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CategoryList from '../category/CategoryList';

class Karthome extends Component {
	render() {
		return(
			<div>
				<Header />
				<CategoryList />
				<Footer />
			</div>
		);
	}
}
export default Karthome;