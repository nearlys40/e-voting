import React, { Suspense } from 'react'
import { useTranslation, withTranslation } from 'react-i18next'
import './edit-profile.styles.scss'

//functional component
// function ShowText() {
//     const { t, i18n } = useTranslation()

//     return (
//         <div style={{ marginTop: '100px' }}>
//             <h1 style={{ marginBottom: '20px' }}>{t('title')}</h1>
//             <h1>{t('description.part1')}</h1>
//             <h1 style={{ marginBottom: '20px' }}>{t('description.part2')}</h1>
//             <button onClick={() => i18n.changeLanguage('en')}>EN</button>
//             <button onClick={() => i18n.changeLanguage('th')}>TH</button>
//         </div>
//     )
// }

// const EditProfilePage = () => {
//     return (
//         <Suspense fallback='loading'>
//             <ShowText />
//         </Suspense>
//     )
// }

// export default EditProfilePage


//using HOC for class based component
class SwitchLanguageExample extends React.Component {
    render() {
        const { t, i18n } = this.props

        return (
            <div style={{ marginTop: '100px' }}>
                <h1>{t('title')}</h1>
                <h1>{t('description.part1')}</h1>
                <h1 style={{ marginBottom: '20px' }}>{t('description.part2')}</h1>
                <button onClick={() => i18n.changeLanguage('en')}>EN</button>
                <button onClick={() => i18n.changeLanguage('th')}>TH</button>
            </div>
        )
    }
}

const EditProfile = withTranslation()(SwitchLanguageExample)

const EditProfilePage = () => {
    return (
        <Suspense fallback='loading'>
            <EditProfile />
        </Suspense>
    )
}

export default EditProfilePage