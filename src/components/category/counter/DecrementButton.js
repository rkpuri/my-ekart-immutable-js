import React, {Component} from 'react';

class DecrementButton extends Component {
	render() {
		const { disabled, click } = this.props
		return(
			<button disabled={disabled} onClick={click}>-</button>
		);
	}
}
export default DecrementButton; 