import Cookies from 'js-cookie'
import {Api} from './index'

export const Login = async (body) =>{
    const result = await Api.post('auth/login/',body).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const SignUp = async (body) =>{
    const result = await Api.post('auth/register/',body).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const RefreshToken = async (refreshToken) =>{
    const result = await Api.post('auth/token/refresh/',{refresh: refreshToken}).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const VerifyEmail = async() =>{
    const result = {}
    return result
}

export const Logout = async(refreshToken) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.post('auth/logout/',
    {
        refresh: refreshToken
    }).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const ForgetPassword = async(body) =>{
    const result = await Api.post('/auth/request-reset-email/',body).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const CheckEmail = async(email) =>{
    const result = await Api.get(`/auth/check-email/${email}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const PasswordReset = async(body) =>{
    const result = await Api.patch('/auth/password-reset-complete',body).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const ContactUS = async(body) =>{
    const result = await Api.post('/api/contact-us',body).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result 
}

export const GetUser = async(id) =>{
    const result = await Api.get(`/auth/get-user/${id}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}
