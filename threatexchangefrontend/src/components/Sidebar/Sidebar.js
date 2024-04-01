import React, { useEffect, useState } from "react";
import theme from '../../theme'
import classes from './bar.module.css'
import ClickAwayListener from "react-click-away-listener";
import { useHistory, useLocation } from "react-router-dom";
import {AiOutlineClose} from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import {FiActivity,FiEye} from 'react-icons/fi'
import {BiNews, BiCategory} from 'react-icons/bi'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {MdSecurity,MdOutlineDashboard} from 'react-icons/md'

const Sidebar = () =>{
    const currLink = useLocation().pathname
    const baseLink = currLink.split('/')[1]
    const history = useHistory()
    const [valDrop, setValDrop] = useState(localStorage.getItem('vulDrop'))
    let bar = new URLSearchParams(useLocation().search).get('bar')

    const outClick = () =>{
        if(bar==='true'){
            history.push({pathname:currLink,search:'bar=false'})
        }
    }

    const dropClick = () =>{
        console.log(valDrop)
        console.log(localStorage.getItem('vulDrop'))
        if(valDrop==='true'){
            setValDrop('false')
            localStorage.setItem('vulDrop','false')
        }
        else{
            setValDrop('true') 
            localStorage.setItem('vulDrop','true')
        }
    }

    const valDropDown = () =>{
        setValDrop(!valDrop)
    }
    return(
        <ClickAwayListener onClickAway={()=>outClick()}>
            <div style={{backgroundColor:theme.colors.lightDark}} className={`${classes.sidebar} ${bar==='true'? classes.sideBarActive :null}`}>
                <AiOutlineClose className={classes.cross} onClick={()=>outClick()}/>
                <button onClick={()=>history.push(`/${baseLink}`)} className={`${classes.sidebarButton} ${currLink===`/${baseLink}`? classes.activeSideBar :null}`}>
                    <MdOutlineDashboard style={{marginRight:20}}/><text>Dashboard</text>
                </button>    
                <button onClick={()=>history.push(`/${baseLink}/adversaries`)} className={`${classes.sidebarButton} ${currLink==='/dashboard/adversaries'? classes.activeSideBar :null}`}>
                    <FiEye style={{marginRight:20}}/>
                    <text>Adversaries</text>
                </button>    
                <button onClick={()=>dropClick()} className={`${classes.dropButton} ${valDrop=='true' ? classes.activeDropButton :null}`}>
                    <text>Vulnerabilities(APT)</text><IoIosArrowForward className={`${classes.dropIcon} ${valDrop=='true'? classes.iconOpen:null}`}/>
                </button>
                <div className={`${classes.subButtons} ${valDrop=='true'? classes.showSub : classes.hideSub}`}>
                    <button onClick={()=>history.push(`/${baseLink}/activities`)} className={`${classes.sidebarButton} ${classes.subButton} ${currLink==='/dashboard/activities'? classes.activeSideBar :null}`}>
                        <FiActivity style={{marginRight:20}}/><text>Activities</text>
                    </button> 
                    <button onClick={()=>history.push(`/${baseLink}/vulnerabilities`)} className={`${classes.sidebarButton} ${classes.subButton} ${currLink==='/dashboard/vulnerabilities'? classes.activeSideBar :null}`}>
                        <MdSecurity style={{marginRight:20}}/>
                        <text>Vulnerabilities</text>
                    </button>
                    <button onClick={()=>history.push(`/${baseLink}/apt`)} className={`${classes.sidebarButton} ${classes.subButton} ${currLink==='/dashboard/apt'? classes.activeSideBar :null}`}>
                        <HiOutlineUserGroup style={{marginRight:20}}/>
                        <text>APT Groups</text>
                    </button>
                    {/* <button onClick={()=>history.push(`/${baseLink}/reports`)} className={`${classes.sidebarButton} ${classes.subButton} ${currLink==='/dashboard/reports'? classes.activeSideBar :null}`}>
                        <BiNews style={{marginRight:20}}/>
                        <text>Reports</text>
                    </button> */}
                    <button onClick={()=>history.push(`/${baseLink}/categories`)} className={`${classes.sidebarButton} ${classes.subButton} ${currLink==='/dashboard/categories'? classes.activeSideBar :null}`}>
                        <BiCategory style={{marginRight:20}}/>
                        <text>Categories</text>
                    </button>
                    
                </div>
                <button onClick={()=>history.push(`/${baseLink}/ioc`)} className={`${classes.sidebarButton} ${currLink==='/dashboard/ioc'? classes.activeSideBar :null}`}>
                    <FiEye style={{marginRight:20}}/>
                    <text>Ioc</text>
                </button> 
            </div>
        </ClickAwayListener>
    )
}

export default Sidebar