import cartActionTypes from './cart.types';

export const toggleCartHidden = () => ({ // payload jest opcjonalny. Stan zmieniamy na przeciwny w reducerze!!
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
}) 