import React,{useEffect, useState} from 'react'
import classes from '../../styles/Dashboard.module.css'
import { GetSubVendors, SubVendor,UnSubVendor } from '../../api/Cve.api'
export default function AptCol({data, subVendors, setSubVendors}) {
    const [sub, setSub] = useState(false)

    useEffect(()=>{
        if(subVendors!==null && subVendors.length>0){
           let is = String(subVendors).includes(data.name)
           if(data.name===null) is = true
           if(is){
               setSub(true)
           }
           else{
               setSub(false)
           }
        }
    },[subVendors,data])

    const subVendor = async() =>{
        const result = await SubVendor({vendors_list:data.name,email:localStorage.getItem('email')})
        console.log(result)
        if(result.status===201){
            setSub(true)
            setSubVendors()
        }
    }

    const unsubVendor = async() =>{
        const result = await UnSubVendor({vendors_list:data.name,email:localStorage.getItem('email')})
        console.log(result)
        if(result.status===200){
            setSub(false)
            setSubVendors()
        }
    }

    return (
        <>
            <td style={{paddingBlock:10,minWidth:'200px'}}>{data.name? data.name : '-'}</td>
            <td style={{textAlign:'center',paddingLeft:18,minWidth:'50px'}}>{Math.floor(Math.random(1,4)*10)}</td>
            <td style={{minWidth:'100px'}}>
                {sub?
                    <button onClick={()=>unsubVendor()} className={`${classes.subButton} ${classes.subActiveButton}`}>Unsubscribe</button>
                    :
                    <button onClick={()=>subVendor()} className={classes.subButton}>Subscribe</button>
            }
            </td>  
        </>
    )
}
