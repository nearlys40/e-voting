import React from 'react'
import { Button, Icon } from 'antd'
import Candidate from '../../../components/candidate/candidate.component'
import './candidates.styles.scss'
import {Table } from 'semantic-ui-react'; 

const Candidates = ({ candidates }) => {
    return (
        <div className='candidates'>
             {/* <div className='candidates-header'>
                <span className='header-text'>Candidates</span>
                <Button 
                    className='add-new-candidate-button'
                    type='primary'
                    onClick={() => alert('add new candidate')}
                >
                    <Icon type='plus' />
                    <span>Add New Candidate</span>
                </Button>
            </div>
            <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>Users</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    

    <Table.Body>
    {
                        candidates.map(({ id, ...otherProps }) => (
                            <Candidate key={id} {...otherProps} />
                        ))
                    }
    </Table.Body>
  </Table> */}
            <div className='candidates-header'>
                <span className='header-text'>Candidates</span>
                <Button type="primary" icon="plus" size={'large'} onClick={() => alert('add new candidate')}>
          <p style={{display:"inline",marginLeft:'15px',color:'white'}}>Add New Candidate</p>
        </Button>
                {/* <Button 
                    className='add-new-candidate-button'
                    type='primary'
                    size='large'
                    onClick={() => alert('add new candidate')}
                >
                    <Icon type='plus' />
                    <span><h4 style={{color:'white'}}>Add New Candidate</h4></span>
                </Button> */}
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