import React from 'react'
import classes from './Header.module.css'
import {isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

import {FaUserCircle, FaSearch} from 'react-icons/fa'
import {CgMenuGridR} from 'react-icons/cg'

import HeaderNavigationBar from './HeaderNavigationBar'

import Logo from '../../assets/images/BrandLogo.png'

const HomeHeader = () =>{
    return(
        <div className={classes.header}>
            <div>
                <img height='22px' style={{marginTop:10,transition:'all 0.3s'}} src={Logo} alt='logo'/>
            </div>
            <HeaderNavigationBar/>
            {!isMobile?
                <div className={classes.headerRight}>
                    <Link to='/' className={`${classes.navBarItems} ${classes.navBarRight}`}>
                        <FaSearch  size={18}  color='white'/>
                    </Link>
                    <Link to='/login' className={`${classes.navBarItems} ${classes.navBarRight}`}>
                        <FaUserCircle size={18}  color='white'/>
                    </Link>
                    <Link to='/' className={`${classes.navBarItems} ${classes.navBarRight}`}>
                        <CgMenuGridR size={18}  color='white'/>
                    </Link>
                </div>
                :
                null
            }
        </div>
    )
}

export default HomeHeader