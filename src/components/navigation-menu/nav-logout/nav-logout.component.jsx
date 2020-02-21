import React, { Suspense } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Col } from 'antd'
import { Link as ScrollLink } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import './nav-logout.styles.scss'

const NvLogout = ({ history }) => {
    const { t, i18n } = useTranslation()

    return (
        <Col className='navigation-menu' span={12}>
            <ScrollLink id='scroll-to-home' className='menu' activeClass="active"
                to='home' spy={true} smooth={true} offset={0} duration={500}
                onClick={() => {
                    history.push('/')
                }}>
                {t('home').toUpperCase()}
            </ScrollLink>
            <ScrollLink id='scroll-to-features' className='menu' activeClass="active"
                to='features' spy={true} smooth={true} offset={0} duration={500}
                onClick={() => {
                    history.push('/')
                }}>
                {t('features').toUpperCase()}
            </ScrollLink>
            <ScrollLink id='scroll-to-about-us' className='menu' activeClass="active"
                to='about-us' spy={true} smooth={true} offset={0} duration={500}
                onClick={() => {
                    history.push('/')
                }}>
                {t('about-us').toUpperCase()}
            </ScrollLink>
            <Link id='to-login-page' className='menu' to='/login'>
                {t('login').toUpperCase()}
            </Link>
            <Link id='to-sign-up-page' className='menu' to='/sign-up'>
                {t('sign-up').toUpperCase()}
            </Link>
        </Col>
    )
}

const NavLogout = (props) => {
    return (
        <Suspense fallback='loading'>
            <NvLogout {...props}/>
        </Suspense>
    )
}

export default withRouter(NavLogout)