import Cookies from 'js-cookie'
import {Api} from './index'

export const GetCount = async () =>{
    // Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    // console.log("cookkiee ", Cookies.get('access'))
    const result = await Api.get(`api/count-of-data`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const GetIocList = async (page,list,search,tag,refrence) =>{
    // Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    console.log("jwtttt ",Cookies.get('access'))

    var result = {}
    if(search === '' && tag === '' && refrence === '')
        result = await Api.get(`api/${list}?page=${page}`) 
    else if(search === '' && refrence === '')
        result = await Api.get(`api/${list}?tag=${tag}&page=${page}`) 
    else if(search === '' && tag === '')
        result = await Api.get(`api/${list}?refrence=${refrence}&page=${page}`) 
    else if(search === '')
        result = await Api.get(`api/${list}?refrence=${refrence}&tag=${tag}&page=${page}`) 
    else
        result = await Api.get(`api/${list}?refrence=${refrence}&tag=${tag}&page=${page}&search=${search}`) 

    .then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    console.log("uuiiii ",result)
    return result


    // const result = await Api.get(`api/${list}?page=${page}`).then(response=>{
    //     return response
    // }).catch((e)=>{
    //     return e.response
    // })
    // console.log("get ioc list api hit",result)
    // return result
}

export const GetIocById = async (list,id) =>{
    // Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`

    const result = await Api.get(`api/${list}/${id}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    console.log("detials resposne", result);
    return result
}

export const GetFilteredIocs = async (page,search,tag,refrence) =>{
    const result = {}
    if(search === '' && refrence === '')
        result = await Api.get(`api/ip?tag=${tag}&page=${page}`) 
    else if(search === '' && tag === '')
        result = await Api.get(`api/ip?refrence=${refrence}&page=${page}`) 
    else if(search === '')
        result = await Api.get(`api/ip?refrence=${refrence}&tag=${tag}&page=${page}`) 
    .then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    console.log(result)
    return result
}

export const GetIocDetails = async () =>{
    const result = await Api.get(`api/data-source-details`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    console.log("detials resposne", result);
    return result
}

