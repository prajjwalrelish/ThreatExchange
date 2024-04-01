import Cookies from 'js-cookie'
import {Api} from './index'

export const GetCards = async (body) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get('api/card').then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const GetCard = async (uuid) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`api/card/${uuid}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}