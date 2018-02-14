import {GET_GROCERY_LIST, INCREMENT_ORDER, DECREMENT_ORDER} from './actionType'

let initialState = {
	groceryList: [
		{ id: 1, name: "Aashirvaad Shudh Chakki Whole Wheat Atta", imgPath:"./assets/aashirvaad.jpg", oldPrice: "₹300", price: "₹220", quantity: "10 kg", orderCount: 0 },
		{ id: 2, name: "Daawat Rozana Gold Basmati Rice", imgPath:"./assets/daawat.jpg", oldPrice: "₹468", price: "₹370", quantity: "5 kg", orderCount: 0 },
		{ id: 3, name: "Kellogg's Original & the Best Corn Flakes (Pouch)", imgPath:"./assets/kelloggs.jpg", oldPrice: "₹290", price: "₹270", quantity: "2 kg", orderCount: 0 }
	]
};

const reducer = (state = initialState, action) => {
	let list
	switch(action.type) {
		case GET_GROCERY_LIST:
			return state.groceryList;
		case INCREMENT_ORDER:
			list = Object.assign([...state.groceryList], 
						{[action.item.id-1]: Object.assign({}, state.groceryList[action.item.id-1], {orderCount: ++action.item.orderCount})}
						)
			return Object.assign({}, state, {groceryList:list});
		case DECREMENT_ORDER:
			list = Object.assign([...state.groceryList], 
						{[action.item.id-1]: Object.assign({},state.groceryList[action.item.id-1],{orderCount: --action.item.orderCount})}
						)
			return Object.assign({}, state, {groceryList:list});
		default:
			return state
	}
};

export default reducer;