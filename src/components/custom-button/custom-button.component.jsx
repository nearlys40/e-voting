import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children, style }) => {
    return(
        <button className='custom-button' style={style}>
            {children}
        </button>
    );
}

export default CustomButton;