import jwt_decode from 'jwt-decode'

export function isTokenExpired(token) {
    const currentTime = new Date().getTime() / 1000 
    const decoded = jwt_decode(token)
    
    if(decoded.exp < currentTime) {
        return false
    }

    return true
}