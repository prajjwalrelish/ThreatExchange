import classes from './Navigation.module.css'
import React from 'react'

import {ReactComponent as HomeIcon} from '../../assets/icons/home-icon.svg'
import {ReactComponent as BellIcon} from '../../assets/icons/bell-icon.svg'
import {ReactComponent as UserIcon} from '../../assets/icons/user-icon.svg'

const BottomTabBar = () =>{
    return(
        <div className={classes.bottomNavigator}>
            <div className={classes.bottomTabBar}>
                <HomeIcon/>
                <text>Dashboard</text>
            </div>
            <div className={classes.bottomTabBar}>
                <BellIcon/>
                <text>Notification</text>
            </div>
            <div className={classes.bottomTabBar}>
                <UserIcon/>
                <text>Profile</text>
            </div>
        </div>
    )
}

export default BottomTabBar