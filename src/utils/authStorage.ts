const AUTH_KEYS = ['refresh_token','refresh_token'];


export const getAccessToken =()=>{
    return(localStorage.getItem('access_token') || sessionStorage.getItem('access_token'))
}

export const  clearAuthStorage = ()=>{
    AUTH_KEYS.forEach((key)=>{
        localStorage.removeItem(key);
        sessionStorage.removeItem(key);
    })
}