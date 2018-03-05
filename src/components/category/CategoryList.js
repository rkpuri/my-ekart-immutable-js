import React, {Component} from 'react'
import CategoryItem from './CategoryItem'
import { connect } from 'react-redux'
import { getGroceryList } from '../../redux/actions'


class CategoryList extends Component {
	render() {
		const { groceryList } = this.props
		return(
			<div>
				{groceryList.map(item => (item) = <CategoryItem item={item} />)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
    groceryList : state
})

const mapDispatchToProps = dispatch => ({ 
	getGroceryList: () => dispatch(getGroceryList()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);