import React, {  useState, useEffect} from 'react';
import theme from '../../theme/index.js';
import { GetIocById } from '../../api/Ioc.api.js';
import classes from '../dashboard/Dashboard.module.css'
import classes2 from '../../styles/Dashboard.module.css'
import styles from '../apt/AptGroup.module.css'

export default function Details ({list,uuid}){

    const[details, setDetails] = useState({})
    useEffect(() => {
        const fetchData = async () => {

        const { data } = await GetIocById(list,uuid);
          setDetails( data );
        }
        fetchData()
    },[])

    return (
        <div  style={{backgroundColor:theme.colors.dark,paddingInline:20,paddingBlock:20}}>
        <div className={classes2.border}>
            <div className={classes.innerVal}>
                    <table style={{width:'100%',minWidth:'800px',textAlignLast:'center',color:theme.colors.whiteoff,wordBreak:'break-all',textAlign:'center'}}>
                        <tr>
                            <th style={{borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10,fontSize:18}}>
                                {list === "ip" && "IP"} 
                                {list === "domain" && "Domain"} 
                                {list === "url" && "URL"} 
                                {list === "hash" && "Hash"} 
                                {" "}
                                Details
                            </th>
                        </tr>
                    <>
                            
                                <tr className={`${styles.row} ${styles.even}`}>
                                    <td width={'24%'} style={{minwidth:'180px',paddingBlock:10}}>
                                       Source ID : {details.source_id}
                                    </td>  
                                </tr>
                                <tr className={`${styles.row} `}>

                                { list === "ip" &&
                                    <td width={'24%'} style={{minwidth:'180px',paddingBlock:10}}>
                                    IP Address : {details.ip_address}
                                    </td>  
                                }
                                { list === "domain" &&
                                    <td width={'24%'} style={{minwidth:'180px',paddingBlock:10}}>
                                    Domain : {details.domain}
                                    </td>  
                                }
                                { list === "url" &&
                                    <td width={'24%'} style={{minwidth:'180px',paddingBlock:10}}>
                                    URL : {details.url}
                                    </td>  
                                }
                                { list === "hash" &&
                                    <td width={'24%'} style={{minwidth:'180px',paddingBlock:10}}>
                                    Hash : {details.hash}
                                    </td>  
                                }
                                </tr>
                                <tr className={`${styles.row} ${styles.even}`}>
                                    <td width={'24%'} style={{minwidth:'180px',paddingBlock:10}}>
                                    Reference : {details.refrence}
                                    </td>  
                                </tr>
                                <tr className={`${styles.row} `}>
                                    <td width={'24%'} style={{minwidth:'180px',paddingBlock:10}}>
                                    Is Active: {details.deleted === false ? "Yes" : "No"}
                                    </td>  
                                </tr>
                                </>
            
                    </table>
            </div>
        </div>
    </div>
        // <div style={{backgroundColor:theme.colors.dark}}>
        //     <div style={{color: 'white',fontSize:25, margin:30}}>
        //           Source ID : {details.source_id} <br/>
        //           IP Address : {details.ip_address} <br/>
        //           Reference : {details.refrence} <br/>
        //           Is Active: {details.deleted === false ? "Yes" : "No"} <br/>
        //       </div>  
        // </div>
    )

}
