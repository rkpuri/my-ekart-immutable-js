import {GET_GROCERY_LIST, INCREMENT_ORDER, DECREMENT_ORDER, SORT_GROCERY_LIST, RESET} from './actionType'
import GroceryItemRecord from '../record/GroceryItemRecord'
import Immutable from 'immutable'

let initialItems = [
		new GroceryItemRecord({ id: 1, name: "Aashirvaad Shudh Chakki Whole Wheat Atta", imgPath:"./assets/aashirvaad.jpg", oldPrice: "₹300", price: "₹220", quantity: "10 kg", orderCount: 0 }),
		new GroceryItemRecord({ id: 2, name: "Daawat Rozana Gold Basmati Rice", imgPath:"./assets/daawat.jpg", oldPrice: "₹468", price: "₹370", quantity: "5 kg", orderCount: 0 }),
		new GroceryItemRecord({ id: 3, name: "Kellogg's Original & the Best Corn Flakes (Pouch)", imgPath:"./assets/kelloggs.jpg", oldPrice: "₹290", price: "₹270", quantity: "2 kg", orderCount: 0 })
	]
let initialState = Immutable.Map(initialItems.map(item => [item.id, item]))

const reducer = (state = initialState, action) => {
	let list
	switch(action.type) {
		case GET_GROCERY_LIST:
			return state;
		case INCREMENT_ORDER:
			return state.update(action.item.id, item => item.update('orderCount', () => item.get('orderCount') + 1))
		case DECREMENT_ORDER:
			return state.update(action.item.id, item => item.update('orderCount', () => item.get('orderCount') - 1))
		case SORT_GROCERY_LIST: 
			return state.sort((a, b) => {return b.orderCount - a.orderCount })
		case RESET: 
			return initialState
		default:
			return state
	}
};

export default reducer;