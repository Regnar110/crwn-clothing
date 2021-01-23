import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg' // specjalny syntax reacta który mówi że chcemy importować komponent reacta który renderuje SVG.
import {auth} from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/> 
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? 
                    null
                :
                    <CartDropdown />
            }
            
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({ // parametr state to root-reducer. Ze stanu destrukturyzujemy user a z niego current user
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)