import React, { useEffect, useState } from 'react'
import classes from '../../styles/Dashboard.module.css'
import { GetCwe } from '../../api/Cve.api'
import {RiExternalLinkLine} from 'react-icons/ri'
import {MdOutlineSecurity} from 'react-icons/md'

export default function CatCol({data}) {

    return (
        <>
            <td style={{paddingBlock:10,minWidth:'80px'}}>{data?.uuid}</td>
            <td style={{textAlign:'center',paddingLeft:18,minWidth:'330px'}}>{data?.name ? data.name:'No Name'}</td>
            <td style={{minWidth:'130px'}}>
                <a target='_blank' href={`http://cwe.mitre.org/data/definitions/${String(data.uuid).substring(String(data.uuid).indexOf('-')+1)}`}>
                    <button className={classes.clButton}><RiExternalLinkLine style={{marginRight:2}}/>info</button>
                </a>
                <button className={classes.clButton}><MdOutlineSecurity style={{marginRight:2}}/>View TC</button>
            </td>
        </>
    )
}
