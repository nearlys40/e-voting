import React from 'react'
import { Button, Icon } from 'antd'
import './candidate.styles.scss'

const Candidate = ({ id, firstName, lastName, description, imageUrl }) => {
    return (
        <div className='candidate-container'>
            <div className='profile-container'>
                <img className='candidate-profile' alt='candidate-profile' src={`${imageUrl}`} />
            </div>
            <div className='data-container'>
                <span className='name'>{firstName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{lastName}</span><br />
                <span className='description'>{description}</span>
            </div>
            <div className='spacer' />
            <div className='button-container'>
                <Button
                    className='edit-button'
                    type='primary'
                    onClick={() => alert('edit candidate')}
                >
                    <Icon type='edit' />
                    <span>EDIT</span>
                </Button>
                <Button
                    className='delete-button'
                    type='primary'
                    onClick={() => alert('delete candidate')}
                >
                    <Icon type='delete' />
                    <span>DELETE</span>
                </Button>
            </div>
        </div>
    )
}

export default Candidate