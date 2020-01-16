import React from 'react'
import { Button, Icon } from 'antd'
import Candidate from '../../../components/candidate/candidate.component'
import './candidates.styles.scss'

const Candidates = ({ candidates }) => {
    return (
        <div className='candidates'>
            <div className='candidates-header'>
                <span className='header-text'>Candidates</span>
                <Button className='add-new-candidate-button' type='primary'>
                    <Icon type='plus' />
                    <span>Add New Candidates</span>
                </Button>
            </div>
            <div className='candidates-container'>
                <div className='candidates-list-header'>
                    <span>Users</span>
                </div>
                <div className='candidates-list'>
                    {
                        candidates.map(({ id, ...otherProps }) => (
                            <Candidate key={id} {...otherProps} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Candidates