import './custom-button.styles.scss'

const CustomButton = ({children, ...otherProps}) => {
    // rozprzestrzeniamy wszystko co dostał nasz komponent w miejscu jego zamontowania czyli np type='submit'
    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton