import React, { Suspense } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Card, Avatar } from 'antd'
import { useTranslation } from 'react-i18next'
import './campaign-item.styles.scss'

const CpItem = ({ id, history, ...otherProps }) => {
    const { t, i18n } = useTranslation()
    const { Meta } = Card;
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
                <Meta style={{ fontFamily: "Glacial Indifference Regular", height: '20%' }}
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={(<h3 style={{ fontFamily: "Glacial Indifference Bold" }}>{name}</h3>)}
                    description={'created on ' + createdOn}
                />
            </Card>
        </div>
    )
}

const CampaignItem = ({ id, ...otherProps }) => {
    return (
        <Suspense fallback='loading'>
            <CpItem key={id} {...otherProps} />
        </Suspense>
    )
}

export default withRouter(CampaignItem)