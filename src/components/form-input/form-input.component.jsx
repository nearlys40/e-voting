import React from 'react'
import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className='group'>
            <label>
                {label.toUpperCase()}
            </label>
            <input className='form-input' onChange={handleChange} {...otherProps} />
        </div>
    );
}

export default FormInput;