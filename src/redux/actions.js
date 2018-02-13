import { GET_GROCERY_LIST, INCREMENT_ORDER, DECREMENT_ORDER } from './actionType'

export function getGroceryList () {
	return {
		type : GET_GROCERY_LIST
	}
}

export function incrementOrder (item) {
	return {
		type : INCREMENT_ORDER,
		item
	}
}

export function decrementOrder (item) {
	return {
		type : DECREMENT_ORDER,
		item
	}
}
