import { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value}) // [name] dynamicznie celuje w name  pola input i dopasowuje value do tego imienia. Jeżeli name to password to wybiera value z input password a nie z np email.
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' value={this.state.email} handleChange={this.handleChange} label='email' required /> 
                    <FormInput name='password' value={this.state.password} handleChange={this.handleChange} label='password' required />
                    <CustomButton type='submit'> 
                        Sign in
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle}> 
                        Sign in with Google
                    </CustomButton>

                </form>
            </div>
        )
    }
}

export default SignIn;