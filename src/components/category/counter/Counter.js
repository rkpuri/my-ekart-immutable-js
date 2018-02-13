import React, {Component} from 'react'
import IncrementButton from './IncrementButton'
import DecrementButton from './DecrementButton'
import { connect } from 'react-redux'
import { incrementOrder, decrementOrder } from '../../../redux/actions'
 
class Counter extends Component {
	constructor(props) {
		super(props)
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}
	increment() {
		this.props.incrementOrder(this.props.item)
	}
	decrement() {
		this.props.decrementOrder(this.props.item)
	}
	render() {
		const { item, increment } = this.props
		return(
			<div>
				<DecrementButton disabled={item.orderCount?false:true} click={this.decrement} />
				<span>{item.orderCount}</span>
				<IncrementButton disabled={false} click={this.increment} />
			</div>
		);
	}
}
const mapDispatchToProps = dispatch => ({
	incrementOrder: (item) => dispatch(incrementOrder(item)),
	decrementOrder: (item) => dispatch(decrementOrder(item))
})
export default connect(null, mapDispatchToProps)(Counter)