import './cart-dropdown.scss'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { withRouter } from 'react-router-dom'

const CartDropdown = ({cartItems, history, dispatch}) => { // UWAGA dispatch jest przekazywany przez connect do naszego komponentu jako props w momecie gdy connect nie dostało drugiego parametru w postaci mapDispatchToProps. Pozwal ato na użycie dispatch bez pisania mapDis... itd. ZOBACZ CUSTOM BUTTON NIŻEJ
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {

                    cartItems.length ?
                        cartItems.map(cartItem => 
                            <CartItem key={cartItem.id} item={cartItem}/>
                        )
                    : 
                    <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));