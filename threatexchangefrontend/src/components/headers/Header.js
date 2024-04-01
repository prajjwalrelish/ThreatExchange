import React, { useState } from 'react'
import classes from './Header.module.css'
import { Link , useLocation, useHistory} from 'react-router-dom';
import {HomeDropMenu} from '..'
import {FaUserCircle} from 'react-icons/fa'
import {CgMenuGridR} from 'react-icons/cg'
import HeaderNavigationBar from './HeaderNavigationBar'
import Logo from '../../assets/images/BrandLogo.png'

const Header = () =>{
    const [accountMenu, setAccountMenu] = useState(false)
    const history = useHistory()
    const currLink = useLocation().pathname
    let bar = new URLSearchParams(useLocation().search).get('bar')

    return(
        <div className={classes.header}>
            <div>
            <CgMenuGridR onClick={()=>{bar==='true' ? history.push({pathname:currLink,search:`?bar=false`}) : history.push({pathname:currLink,search:`?bar=true`})}} className={classes.menuButton} /> 
            <Link to='/dashboard'>
                <img height='22px' style={{marginTop:10,transition:'all 0.3s'}} src={Logo} alt='logo'/>
            </Link>
            </div>
            {currLink.includes('home')?
                <HeaderNavigationBar/>:
                null
            }
            <div className={classes.headerRight}>
                <div  onClick={()=>setAccountMenu(true)}  className={`${classes.navBarItems} ${accountMenu? classes.activeNavBarItems :null} ${classes.navBarRight}`}>
                    <FaUserCircle size={22}  color='white'/>
                </div>
                <HomeDropMenu open={accountMenu} setOpen={(b)=>setAccountMenu(b)}/>
            </div>
            
        </div>
    )
}

export default Header