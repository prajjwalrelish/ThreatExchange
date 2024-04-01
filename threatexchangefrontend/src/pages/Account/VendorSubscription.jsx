import React from "react";
import { Paginate } from '../../components'
import classes from './Account.module.css'
import theme from '../../theme'
import styles from '../../pages/apt/AptGroup.module.css'
import {MdOutlineSecurity, MdNotificationsNone, MdNotificationsOff} from 'react-icons/md'
import { Unsubscribe } from "@material-ui/icons";
// import { Col } from '../../components'

export default function VendorSubscription({data,currPage,count,changePage,handleClick,subscribedVendors,accountSubscription}){
    return(
        <div className={classes.border} style={{backgroundColor:theme.colors.footer}}>
                <text style={theme.textVariants} className={classes.header}>My Venders ({count}) </text>
                {data === null? null :
                    <table style={{backgroundColor:theme.colors.lightDark,color:'white'}}>

<tr>
                                <th style={{borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10,fontSize:18}}>
                                    Vendor
                                </th>
                                { !accountSubscription &&
                                <th style={{borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10,fontSize:18}}>
                                    Products
                                </th>
                                }
                                <th style={{borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10,fontSize:18}}>
                                    Actions
                                </th>
                            </tr>
                        <>
                        {data.length?
                            <>
                            {data.map((item,index)=>{
                                return(
                                    <>
                                    <tr className={`${styles.row} ${index%2==0? styles.even:null}`} style={{cursor:"pointer",textAlignLast:'center',}}>
                                        <td width={'24%'} style={{minwidth:'180px',paddingBlock:10,textAlignLast:'left'}}>
                                            {item.name}
                                        </td>
                                        { !accountSubscription &&
                                            <td width={'24%'} style={{minwidth:'180px',paddingBlock:10}}>
                                                {item.products.length}
                                            </td>
                                        }
                                        
                                        <td width={'24%'} style={{minwidth:'180px',paddingBlock:10}}>
                    <button 
                        className={classes.clButton} 
                        onClick={() => handleClick(item.uuid,subscribedVendors.includes(item.uuid) ? "subscribe" : "unsubscribe")} 
                        style={{marginTop:2,backgroundColor: subscribedVendors.includes(item.uuid) ? "#cc0000ad" : null}}
                    >
                    {
                        subscribedVendors.includes(item.uuid) ?
                        null :
                        <MdNotificationsNone style={{marginRight:2,width: 20,height: 20}}/>      
                    }
                        <text style={{marginLeft:5,fontSize:15}}>
                            {
                                subscribedVendors.includes(item.uuid) ?
                                "Unsubscribe" 
                                : "Subscribe"
                            }
                        </text>
                    </button>
                    { !accountSubscription &&
                    <>
                <span style={{margin:2}}/>
                <button style={{marginTop:2}} className={classes.clButton}>
                    <MdOutlineSecurity style={{marginRight:2,width: 20,height: 20}}/>
                    <text style={{marginLeft:5,fontSize:15}}>CVE</text>
                </button>
                </>
                            }
                                            {/* <Link className={classes.linkTag} to={`/dashboard/ioc/${list}/${item.uuid}`}> */}
                                                {/* {list === "ip" && item.ip_address} */}
                                            {/* </Link> */}
                                        </td>
                                    </tr>
                                    
                                       
                                    
                                    </>
                                    )
                                })}
                            </>
                        :
                            <div><h6 style={{color:'white',fontSize:12}}>No Vendors Found !</h6></div>
                        }
                        </>




                        
                        {/* {vendors.map((item,index)=>{
                            return (
                            <tr className={`${styles.row} ${index%2==0? styles.even:null} `} key={index}>
                                {/* <Col.AptCol data={{name:item}} subVendors={vendors} setSubVendors={()=>{}}/> */}
                                {/* <Col.AptCol data={item}/> */}

                            {/* </tr>) */}
                        {/* })} */} 
                    </table>
                    }
                     <div style={{display:'flex'}}>
                        <Paginate currPage={currPage} setPage={(v)=>changePage(v)} count={count}/>
                    </div> 
              </div>      
    )
}