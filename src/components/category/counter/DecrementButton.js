import React, {Component} from 'react';

class DecrementButton extends Component {
	render() {
		const { disabled, click } = this.props
		return(
			<div>
				<button disabled={disabled} onClick={click}>-</button>
			</div>
		);
	}
}
export default DecrementButton; 