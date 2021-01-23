import './cart-icon.scss'
import { connect } from 'react-redux'
import  { toggleCartHidden } from '../../redux/cart/cart.actions'
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden }) => {
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShopingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>    
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)