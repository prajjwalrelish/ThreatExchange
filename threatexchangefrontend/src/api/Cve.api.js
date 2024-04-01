import Cookies from 'js-cookie'
import {Api} from './index'

// --------------------------------- Modified By P start --------------------------------

export const GetCves = async (page) =>{
    // Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    
    const result = await Api.get(`api/cve?page=${page}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const GetCwes = async (page,search) =>{
    // Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
  
    const result = search === '' ?
    await Api.get(`api/cwe?page=${page}`) :

    await Api.get(`api/cwe?search=${search}&page=${page}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    console.log(result)
    return result
}

export const GetVendors = async (page) =>{
    // Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`api/vendors?page=${page}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const GetVendorById = async (id) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`/api/vendors/${id}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}


export const GetSubVendors = async () =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`/api/vendor/subscribe`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const VendorSub = async (body,status) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.post(`/api/vendor/${status}`,body).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const ProductSub = async (body,status) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.post(`/api/product/${status}`,body).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

// --------------------------------- Modified By P end -----------------------------------


// export const GetCves = async (body) =>{
//     Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
//     const result = await Api.get(`api/cve?page=${body.page}&filter_by=${body.filter}&search=${body.search}`).then(response=>{
//         return response
//     }).catch((e)=>{
//         return e.response
//     })
//     return result
// }

export const GetCve = async (body) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`api/cve/${body.cve}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

// export const GetCwes = async (body) =>{
//     Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
//     const result = await Api.get(`api/cwe?page=${body.page}&search=${body.search}`).then(response=>{
//         return response
//     }).catch((e)=>{
//         return e.response
//     })
//     console.log(result)
//     return result
// }

export const GetCwe = async (body) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`api/cwe/${body.cwe}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const GetCweCve = async (body) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`api/cwe/${body.cwe}/${body.cve}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

// export const GetVendors = async (body) =>{
//     Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
//     const result = await Api.get(`api/vendors?page=${body.page}&letter=${String(body.letter).toLowerCase()}&search=${body.letter}${body.search}`).then(response=>{
//         return response
//     }).catch((e)=>{
//         return e.response
//     })
//     return result
// }

export const GetVendor = async (body) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`api/vendors/${body.vendor}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

// export const GetSubVendors = async (body) =>{
//     Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
//     const result = await Api.get(`/api/vendors/subscribe`).then(response=>{
//         return response
//     }).catch((e)=>{
//         return e.response
//     })
//     return result
// }

export const SubVendor = async (body) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.post(`/api/vendors/subscribe`,body).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const UnSubVendor = async (body) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.post(`/api/vendors/unsubscribe`,body).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}


export const GetVendorCve = async (body) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`api/vendors/${body.vendor}/cve`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const GetVendorProducts = async (body) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`api/vendors/${body.vendor}/products`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const GetVendorProduct = async (body) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`api/vendors/${body.vendor}/products/${body.product}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const GetVendorProductCves = async (body) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`api/vendors/${body.vendor}/products/${body.product}/cve`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const GetReports = async (body) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`api/reports?page=${body.page}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const GetReport = async (body) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`api/reports/${body.report}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const GetReportAlerts = async (body) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`api/reports/${body.report}/alerts`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}

export const GetReportAlert = async (body) =>{
    Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`api/reports/${body.report}/alerts/${body.alert}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    return result
}