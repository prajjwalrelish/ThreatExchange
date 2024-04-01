
import React from 'react';
import theme from '../../theme/index.js';
import DisplayIocInTable from './IocList.jsx';

export default function IpsList ({list,fetchData,iocs,count}){

    return (
        <div style={{backgroundColor:theme.colors.dark}}>
            <DisplayIocInTable 
                list = {list.includes("latest") ? "latest-ip" : "ip"}
                fetchData={fetchData} iocs={iocs} count={count}
            />
        </div>
    )

}
