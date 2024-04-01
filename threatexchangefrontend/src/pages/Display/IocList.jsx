import React, { useState, useEffect } from 'react'
import Card from '../../components/cards/Card'
import theme from '../../theme'
import classes2 from '../../styles/Dashboard.module.css'
import classes from '../dashboard/Dashboard.module.css'
import { Paginate, Loader } from '../../components'
import {Link } from 'react-router-dom'
import styles from '../apt/AptGroup.module.css'

import { GetIocList, GetIocById } from '../../api'
import { useHistory } from 'react-router-dom';


export default function DisplayIocInTable({list,fetchData,iocs,count}) {
    const history = useHistory()

    // const [iocs, setIocs] = useState({})
    const [currPage,setCurrPage] = useState(1)
    // const [count, setCount] = useState(0)
    const [details, setDetails] = useState({uuid:null,showDetails:false});
    const [iocData, setIocData] = useState(null)
    useEffect(()=>{
          fetchData(currPage,list,'','','')
    },[currPage])

    const changePage = async(page) =>{
        setCurrPage(page)
        // let query = new URLSearchParams(location.search)
        // query.set('page',String(page))
        // history.push({search:query.toString()})
    }

    const dataFilter = (e) =>{
        e.preventDefault()
    }

    const handleClick = async (uuid,list) => {
        
        const { data } = 
        await GetIocById(list=list.includes("latest") ? list.substring(7) : list,uuid);
        setIocData( data );

        const iocDetails = {
            uuid,
            showDetails: uuid === details.uuid ? !details.showDetails : true
        }
        setDetails(iocDetails);

        // return(
        //   history.push(`/dashboard/ioc/${list}/${uuid}`)
        // )
      }

    return (
        <div style={{backgroundColor:theme.colors.dark,paddingInline:20,paddingBlock:20}}>
            <div className={classes2.border}>
                <div className={classes.innerVal}>
                    {iocs===null?
                        <div><Loader size={30}/></div>
                        :
                        <table style={{width:'100%',minWidth:'800px',textAlignLast:'center',color:theme.colors.whiteoff,wordBreak:'break-all',textAlign:'center'}}>
                            <tr>
                                <th style={{borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10,fontSize:18}}>
                                    List of {list.includes("latest") && "latest" }
                                    {" "}
                                    {list.includes("ip") && "IPs"}
                                                {list.includes("domain") && "Domains"}
                                                {list.includes("url") && "URLs"}
                                                {list.includes("hash") && "Hashs"}
                                </th>
                                <th style={{borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10,fontSize:18}}>
                                    Source ID
                                </th>
                            </tr>
                        <>
                        {iocs.length?
                            <>
                            {iocs.map((item,index)=>{
                                return(
                                    <>
                                    <tr className={`${styles.row} ${index%2==0? styles.even:null}`} onClick={() => handleClick(item.uuid,list)} style={{cursor:"pointer"}}>
                                        <td width={'24%'} style={{minwidth:'180px',paddingBlock:10}}>
                                            <span className={classes.linkTag}>
                                                {list.includes("ip") && item.ip_address}
                                                {list.includes("domain") && item.domain}
                                                {list.includes("url") && item.url}
                                                {list.includes("hash") && item.hash}
                                            </span>
                                        </td>
                                        <td width={'24%'} style={{minwidth:'180px',paddingBlock:10}}>
                                        <span className={classes.linkTag}>
                                            {item.source_id}
                                        </span>
                                        </td>
                                    </tr>
                                   
                                    { details.uuid === item.uuid && details.showDetails === true && 
                                     <tr>
                                         <td colspan="4">
                                        <div style={{backgroundColor:theme.colors.dark,margin:10,padding:10,minWidth:100,minHeight:100,overflow:"auto"}}>
                                            <div style={{textAlign:'center'}}>
                                                <div style={{display:"inline-block"}}>

                                                <div className={classes.column}>
    <div className={classes.row} style={{paddingTop:10}}>
    <text style={{color:'gray',fontWeight:'bold',fontSize:18}}>Source ID</text>
    </div>
    <div className={classes.row} style={{paddingTop:30}}>
    <text style={{color:'gray',fontWeight:'bold',fontSize:18,marginRight:10}}>
                { list.includes("ip") &&
                    "IP Address" 
                }
                { list.includes("domain") &&
                    "Domain"
                }
                { list.includes("url") &&
                    "URL"
                }
                { list.includes("hash") &&
                    "Hash"
                }
    </text>
    {   iocData.desc !== null && iocData.desc !== "" &&
        <div className={classes.row} style={{paddingTop:30}}>
            <text style={{color:'gray',fontWeight:'bold',fontSize:18}}>Description</text>
        </div>
    }
    <div className={classes.row} style={{paddingTop:30}}>
            <text style={{color:'gray',fontWeight:'bold',fontSize:18}}>Tags</text>
    </div>
    {
        iocData.created_by !== "" &&
        <div className={classes.row} style={{paddingTop:30}}>
            <text style={{color:'gray',fontWeight:'bold',fontSize:18}}>Created By</text>
        </div>
    }
    {
        iocData.created_at !== "" &&
        <div className={classes.row} style={{paddingTop:30}}>
            <text style={{color:'gray',fontWeight:'bold',fontSize:18}}>Created At</text>
        </div>
    }
    {
        iocData.updated_by !== "" &&
        <div className={classes.row} style={{paddingTop:30}}>
            <text style={{color:'gray',fontWeight:'bold',fontSize:18}}>Updated By</text>
        </div>
    }
    {
        iocData.updated_at !== "" &&
        <div className={classes.row} style={{paddingTop:30}}>
            <text style={{color:'gray',fontWeight:'bold',fontSize:18}}>Updated At</text>
        </div>
    }
    {
        iocData.remark !== "" &&
        <div className={classes.row} style={{paddingTop:30}}>
            <text style={{color:'gray',fontWeight:'bold',fontSize:18}}>Remark</text>
        </div>
    }
    {
        iocData.refrence !== "" &&
        <div className={classes.row} style={{paddingTop:30}}>
            <text style={{color:'gray',fontWeight:'bold',fontSize:18}}>Refrence</text>
        </div>
    }
    {
        iocData.deleted !== "" &&
        <div className={classes.row} style={{paddingTop:30}}>
            <text style={{color:'gray',fontWeight:'bold',fontSize:18}}>Is Active</text>
        </div>
    }
  </div>
</div>
<div className={classes.column}>
    <div className={classes.row}>
    <div style={{borderRadius:10,backgroundColor:theme.colors.footer,padding:10}}>
            {iocData.source_id}
    </div>
    </div>
    {<div className={classes.row}>
    <div  style={{borderRadius:10,backgroundColor:theme.colors.footer,padding:10,marginTop:10}}>
    { list.includes("ip") &&
                                                iocData.ip_address
                                            }
                                            { list.includes("domain") &&
                                                iocData.domain
                                            }
                                            { list.includes("url") &&
                                                iocData.url
                                            }
                                            { list.includes("hash") &&
                                                iocData.hash
                                            }
    </div>
    </div>
    }
    {   iocData.desc !== null && iocData.desc !== "" &&
        <div className={classes.row}>
        <div style={{borderRadius:10,backgroundColor:theme.colors.footer,padding:10,marginTop:10}}>
                {iocData.desc}
        </div>
        </div>
    }
    
    <div className={classes.row} style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                            {iocData?.tag.map((data,index)=>{
                                return <div style={{padding:10,margin:10,borderRadius:10,backgroundColor:theme.colors.footer}} key={index} className={classes.tools}>{data}</div>
                            })}
                        </div>
    {   iocData.created_by !== "" &&
        <div className={classes.row}>
        <div style={{borderRadius:10,backgroundColor:theme.colors.footer,padding:10,marginTop:10}}>
                {iocData.created_by}
        </div>
        </div>
    }
    {   iocData.created_at !== "" &&
        <div className={classes.row}>
        <div style={{borderRadius:10,backgroundColor:theme.colors.footer,padding:10,marginTop:10}}>
                {iocData.created_at}
        </div>
        </div>
    }
    {   iocData.updated_by !== "" &&
        <div className={classes.row}>
        <div style={{borderRadius:10,backgroundColor:theme.colors.footer,padding:10,marginTop:10}}>
                {iocData.updated_by}
        </div>
        </div>
    }
    {   iocData.updated_at !== "" &&
        <div className={classes.row}>
        <div style={{borderRadius:10,backgroundColor:theme.colors.footer,padding:10,marginTop:10}}>
                {iocData.updated_at}
        </div>
        </div>
    }
    {   iocData.remark !== "" &&
        <div className={classes.row}>
        <div style={{borderRadius:10,backgroundColor:theme.colors.footer,padding:10,marginTop:10}}>
                {iocData.remark}
        </div>
        </div>
    }
    {   iocData.refrence !== "" &&
        <div className={classes.row}>
        <div style={{borderRadius:10,backgroundColor:theme.colors.footer,padding:10,marginTop:10}}>
            {iocData.refrence}
        </div>
        </div>
    }
    {   iocData.deleted !== null &&
        <div className={classes.row}>
        <div style={{borderRadius:10,backgroundColor:theme.colors.footer,padding:10,marginTop:10}}>
            {iocData.deleted === false ? "Yes" : "No"}
        </div>
        </div>
    }
</div>
</div>
</div>
</div>
</td>
                                    
                                    </tr>
                            }
                                    </>
                                    )
                                })}
                            </>
                        :
                            <div><h6 style={{color:'white',fontSize:12}}>No {list === "ip" && "IPs"}
                            {list === "domain" && "Domains"}
                            {list === "url" && "URLs"}
                            {list === "hash" && "Hashs"} Found !</h6></div>
                        }
                        </>
                        </table>
                    }
                    <div style={{display:'flex'}}>
                        { count > 1 && <Paginate currPage={currPage} setPage={(v)=>changePage(v)} count={count}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
















// import React, { useState, useEffect} from "react";
// import BasicPagination from "../../../common/pagination";
// import { paginate } from "../../../utils/paginate";
// import IocsTable from "./IocTable";
// import _ from "lodash";
// import { GetIocList, GetIocById } from "../../../api";
// import cardBodyStyle from './../../assets/jss/material-dashboard-react/components/cardBodyStyle';
// import { classNames } from 'classnames';

// const DisplayIocInTable = ({list}) => {

//     const[iocList,setIocList] = useState([])
//     const[pageSize,setPageSize] = useState(20)
//     const[currentPage,setCurrentPage] = useState(1)
  
//   useEffect(() => {
//       const fetchData = async () => {
//         const { data } = await GetIocList(list,currentPage);
//         setIocList( data.results );
//       }
//       fetchData()
//     },[currentPage])
  
  
//     const handlePageChange = (page) => {
//       setCurrentPage( page );
//     };
  
//     const handleClickForDetails = async (id) => {
//       const response = await GetIocById(list,id);
//       if(response.status === 200)
//          console.log("make chnages in IocList in line no. 28")
//     };
  
//     const getPageData = () => {
      
//       const iocs = paginate(iocList, currentPage, pageSize);
      
//       return { totalCount: iocList.length, data: iocs };
//     };
      
//   const { totalCount, data: iocs } = getPageData();
  
//       return (
//         <div>
//           <div>
//             <IocsTable
//               iocs={iocList}
//               list = {list}
//             />
          
//             <div style={{margin:30}}/>
//         { iocList !== [] &&
//             <BasicPagination
//               itemscount={totalCount}
//               pageSize={pageSize}
//               currentPage={currentPage}
//               onPageChange={handlePageChange}
//               list = {list}
//             />
//         }
//           </div>
//         </div>
//       );
    
//   }

// export default DisplayIocInTable;