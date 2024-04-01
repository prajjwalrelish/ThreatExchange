import React from 'react';
import IocCards from './IocCards';
import IpsList from './Ips';
import DomainsList from './Domains';
import UrlsList from './Urls';
import HashsList from './Hashs';
import Details from './Details';

export default function DisplayIoc ({handleClick, match,fetchData,iocs,count}){

  const list = match.params.list;
  const uuid = match.params.uuid;

    if (!list)     
        return (
          <IocCards handleClick={handleClick}/>
        )
        
    // else if (list && uuid)
    //     return (
    //       <Details 
    //         list={list.includes("latest") ? list.substring(7) : list}
    //         uuid={uuid}
    //       />
    // )
    
    else if (list.includes("ips"))
        return (
             <IpsList list={list} fetchData={fetchData} iocs={iocs} count={count}/> 
        )
    else if (list.includes("domains"))
        return (
          <DomainsList list={list} fetchData={fetchData} iocs={iocs} count={count}/>  
        )

    else if (list.includes("urls"))
        return (
          // <div style={{textAlign: "center"}}>
          // {/* <div style={{display: "inline-block"}}> */}
          <UrlsList list={list} fetchData={fetchData} iocs={iocs} count={count}/> 
          // </div>
          // </div> 
        )

    else if (list.includes("hashs"))
        return (
          <HashsList list={list} fetchData={fetchData} iocs={iocs} count={count}/>
        )

}















 