import React from 'react'
import { Button } from 'antd'
import Candidate from '../../../components/candidate/candidate.component'
import './candidates.styles.scss'

const Candidates = ({ candidates }) => {
    return (
        <div className='candidates'>
            <div className='candidates-header'>
                <span className='header-text'>Candidates</span>
                <Button type="primary" icon="plus" size={'large'} onClick={() => alert('add new candidate')}>
                    <p style={{ display: "inline", marginLeft: '15px', color: 'white' }}>Add New Candidate</p>
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