import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
    // rozprzestrzeniamy wszystko co dostał nasz komponent w miejscu jego zamontowania czyli np type='submit'
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton