import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg' // specjalny syntax reacta który mówi że chcemy importować komponent reacta który renderuje SVG.
import {auth} from '../../firebase/firebase.utils'
import { connect } from 'react-redux'

const Header = ({ currentUser }) => {
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
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ // parametr state to root-reducer
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)