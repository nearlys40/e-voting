import React from 'react'
import { Button, Row, Col } from 'antd'
import CustomButton from '../custom-button/custom-button.component'
import './campaign-item.styles.scss'

const CampaignItem = (item) => {
    const { name, createdOn, imageUrl } = item
    return (
        <Col className='campaign-item'>
            <Row className='campaign-item-header'>
                <Col span={20}>
                    <span className='name'>{name}</span><br />
                    <span className='created-on'>created on {createdOn}</span>
                </Col>
                <Col className='spacer' />
                <Col span={4}>
                    <Button type="primary" icon="delete" />
                </Col>
            </Row>
            <div className='poster-container'>
                <img className='poster-image' src={`${imageUrl}`} alt='poster' />
                <div className='button-container'>
                    <CustomButton>Visit</CustomButton>
                </div>
            </div>
        </Col>
    )
}

export default CampaignItem