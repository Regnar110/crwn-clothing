import cartActionTypes from './cart.types'
import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM: 
            return {
                ...state, 
                cartItems: addItemToCart(state.cartItems, action.payload) // chcemy aby do carItems dodawane były nowe przedmioty więc do istniejącego koszyka dodajemu nowe rzeczy stąd rozporzestrzenienie starego stanu
            }
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }

            default:
                return state;
    }
}

export default cartReducer;