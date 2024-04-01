import React from 'react'
import theme from '../../theme'
import classes from './Header.module.css'
import {useHistory,useLocation} from 'react-router-dom'
const AccountHeader = () =>{
    const currLink = useLocation().pathname
    const history = useHistory()

    return(
        <div  className={`${classes.AccountHeader}`} style={{backgroundColor:theme.colors.footer}}>
            <button onClick={()=>history.push('/account/subscriptions')} className={`${currLink==='/account/subscriptions'? classes.AccountHeaderLinkActive:classes.AccountHeaderLink}`}>Subscriptions</button>
            <button onClick={()=>history.push('/account/notifications')} className={`${currLink==='/account/notifications'? classes.AccountHeaderLinkActive:classes.AccountHeaderLink}`}>Notifications</button>
            <button onClick={()=>history.push('/account/tags')} className={`${currLink==='/account/tags'? classes.AccountHeaderLinkActive:classes.AccountHeaderLink}`}>Tags</button>
            <button onClick={()=>history.push('/account/profile')} className={`${currLink==='/account/profile'? classes.AccountHeaderLinkActive:classes.AccountHeaderLink}`}>Profile</button>
        </div>
    )
}

export default AccountHeader