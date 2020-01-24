import React from 'react'
import { withRouter } from 'react-router-dom'
import { Col, Row, Button, Card, Icon, Avatar } from 'antd'
import CustomButton from '../custom-button/custom-button.component'
import './campaign-item.styles.scss'
const { Meta } = Card;

const CampaignItem = ({ id, history, ...otherProps }) => {
    const { name, createdOn, description, imageUrl, candidates, voters } = otherProps
    return (
        <div>
            <Card
                style={{ width: '18vw', minWidth: '240px' }}
                cover={
                    <img
                        className="center-cropped"
                        alt="example"
                        src={`${imageUrl}`}
                    />
                }
                actions={[
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                        <Button type="primary" className='visit-button' onClick={() => history.push({
                            pathname: '/campaign-management',
                            state: {
                                name: name,
                                createdOn: createdOn,
                                imageUrl: imageUrl,
                                description: description,
                                candidates: candidates,
                                voters: voters
                            }
                        })}>V i s i t</Button>
                        <Button shape="circle" icon="delete" type="danger" />
                    </div>
                ]}
            >
                <Meta style={{fontFamily: "Glacial Indifference Regular",height:'20%'}}
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={(<h3 style={{fontFamily: "Glacial Indifference Bold"}}>{name}</h3>)}
                    description={'created on ' + createdOn}
                />
            </Card>

            {/* <Col className='campaign-item'>
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
                        <CustomButton onClick={() => history.push({
                            pathname: '/campaign-management',
                            state: {
                                name: name,
                                createdOn: createdOn,
                                imageUrl: imageUrl,
                                description: description,
                                candidates: candidates,
                                voters: voters
                            }
                        })}>Visit</CustomButton>
                    </div>
                </div>
            </Col> */}
        </div>
    )
}

export default withRouter(CampaignItem)