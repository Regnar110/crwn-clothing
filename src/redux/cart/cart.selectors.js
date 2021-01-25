import { createPortal } from 'react-dom';
import { createSelector } from 'reselect'

const selectCart = state => state.cart; // input selector pobierfający cały stan

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItems = createSelector( // output selector  który jako pierwsyz parametr przyjął tablicję input selectorów a drugi to funkcja zwracająca cartItems dla tego inputu z 1szego parametru
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector( // to samo co wyżej tylko w tablicy znalażł się poprzedni output selector
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
)