export function authHeader() {
    let user = localStorage.getItem('user')

    if (user && user.accessToken) {
        return `Bearer + ${user.accessToken}`
    } else
        return ''
}