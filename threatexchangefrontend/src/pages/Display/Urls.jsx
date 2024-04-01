import React from 'react';
import theme from '../../theme/index.js';
import DisplayIocInTable from './IocList.jsx';

export default function URLsList ({list,fetchData,iocs,count}){

    return (
        <div style={{backgroundColor:theme.colors.dark}}>
            <DisplayIocInTable 
                list = {list.includes("latest") ? "latest-url" : "url"}
                fetchData={fetchData} iocs={iocs} count={count}
            />
        </div>
    )

}
