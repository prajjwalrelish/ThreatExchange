import React from 'react';
import theme from '../../theme/index.js';
import DisplayIocInTable from './IocList.jsx';

export default function HashsList ({list,fetchData,iocs,count}){

    return (
        <div style={{backgroundColor:theme.colors.dark}}>
            <DisplayIocInTable 
                list = {list.includes("latest") ? "latest-hash" : "hash"}
                fetchData={fetchData} iocs={iocs} count={count}
            />
        </div>
    )

}
