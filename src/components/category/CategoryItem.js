import React, {Component} from 'react'
import './CategoryItem.less'
import Counter from './counter/Counter'

class CategoryItem extends Component {
	render() {
		const { item } = this.props

		return(
			<div className="p-cat-item">
				<a >
					<div className="p-cat-item-title">{item.name}</div>
					<Counter item = {item} />
				</a>

			</div>
		);
	}
}
export default CategoryItem; 