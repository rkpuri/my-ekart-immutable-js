import {GET_GROCERY_LIST, INCREMENT_ORDER, DECREMENT_ORDER} from './actionType'

let initialState = {
	groceryList: [
		{ id: 1, name: "Apple", imgPath:"", price: 120, unit: "kg", orderCount: 0 },
		{ id: 2, name: "Orange", imgPath:"", price: 50, unit: "kg", orderCount: 0 },
		{ id: 3, name: "Banana", imgPath:"", price: 40, unit: "kg", orderCount: 0 }
	]
};

const reducer = (state = initialState, action) => {
	let list
	switch(action.type) {
		case GET_GROCERY_LIST:
			return state.groceryList;
		case INCREMENT_ORDER:
			list = Object.assign([...state.groceryList], 
						{[action.item.id-1]: Object.assign({},state.groceryList[action.item.id-1],{orderCount: ++action.item.orderCount})}
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