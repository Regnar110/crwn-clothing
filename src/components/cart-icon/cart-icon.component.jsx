import './cart-icon.scss'
import { connect } from 'react-redux'
import  { toggleCartHidden } from '../../redux/cart/cart.actions'
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShopingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>    
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ( { cart: {cartItems} } ) => ({
    itemCount : cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0) // To co tu napisaliśmy to redux selector.
    // redux selector to kod, który zwraca nam tylko określony kawałek stanu. W tym wypadku sumę wszystkich quantity
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)