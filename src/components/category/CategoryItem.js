import React, {Component} from 'react'
import './CategoryItem.less'
import Counter from './counter/Counter'

class CategoryItem extends Component {
	render() {
		const { item } = this.props
console.log(item.imgPath)
		return(
			<div className="p-cat-item">
				<a>
					<div class="p-cat-item-img">
						<img class="p-item-img" src={item.imgPath} />
					</div>
					<div className="p-cat-item-title">{item.name}</div>
					<div className="p-cat-item-quantity">{item.quantity}</div>
					<div className="p-cat-item-price-container">
						<div className="p-cat-item-old-price">{item.oldPrice}</div>
						<div className="p-cat-item-price">{item.price}</div>
					</div>
					<Counter item = {item} />

				</a>

			</div>
		);
	}
}
export default CategoryItem; 