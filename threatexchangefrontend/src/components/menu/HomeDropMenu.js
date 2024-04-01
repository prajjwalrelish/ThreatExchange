import React, { useContext } from 'react'
import * as Routes from '../../Routes'
import { Link } from 'react-router-dom'
import theme from '../../theme'
import classes from './Menu.module.css'
import { AuthContext } from '../../contexts'
import {FiLogOut, FiUser, FiSettings, FiLogIn, FiHome} from 'react-icons/fi'
import {RiDashboardLine} from 'react-icons/ri'
import ClickAwayListener from 'react-click-away-listener';

const HomeDropMenu = ({open,setOpen}) =>{
    const {refreshToken,logout} = useContext(AuthContext)
   
    const handleClickAway = () => {
        if(open){
            setOpen(false)
        }
	};

    return(
        <ClickAwayListener onClickAway={handleClickAway}>
            <div style={{backgroundColor:theme.colors.footer,top:'70px'}} className={`${classes.dropdownContent} ${open? classes.show : null}`}>
                {refreshToken?
                    <>
                    <Link className={classes.ItemStyle} onClick={()=>setOpen(false)} to='/dashboard'><RiDashboardLine size={15} style={{marginRight:10}}/>Dashboard</Link>
                    <Link className={classes.ItemStyle} onClick={()=>setOpen(false)} to='/home'><FiHome size={15} style={{marginRight:10}}/>Home</Link>
                    <Link className={classes.ItemStyle} onClick={()=>setOpen(false)} to='/account'><FiUser size={15} style={{marginRight:10}}/>Account</Link>
                    <Link className={classes.ItemStyle} onClick={()=>setOpen(false)} to='/dashboard'><FiSettings size={15} style={{marginRight:10}}/>Settings</Link>
                    <Link className={classes.ItemStyle} onClick={()=>logout()} to='/home'><FiLogOut size={15} style={{marginRight:10}}/>Log Out</Link>
                    </>
                    :
                    <>
                    <Link className={classes.ItemStyle} to={Routes.login}><FiLogIn size={15} style={{marginRight:10}}/>Log In</Link>
                    <Link className={classes.ItemStyle} to={Routes.register}>Create Account</Link>
                    </>
                }
            </div>
        </ClickAwayListener>
    )
}

export default HomeDropMenu