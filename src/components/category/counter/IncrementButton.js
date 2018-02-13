import React, {Component} from 'react';

class IncrementButton extends Component {
	render() {
		const { disabled, click } = this.props
		return(
			<div>
				<button disabled={disabled} onClick={click}>+</button>
			</div>
		);
	}
}
export default IncrementButton; 