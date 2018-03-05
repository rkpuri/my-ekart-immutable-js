import Immutable from 'immutable'

class GroceryItemRecord extends Immutable.Record({
	id:undefined,
	name: undefined,
	imgPath: undefined,
	oldPrice: 0,
	price: 0,
	quantity: 0,
	orderCount: 0
}){
	//totalPrice()=> (this.orderCount * this.price)
}
export default GroceryItemRecord