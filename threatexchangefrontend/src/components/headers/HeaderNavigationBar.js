import React from 'react'
import classes from './Header.module.css'
import theme from '../../theme'
import { Link, useHistory, useLocation } from 'react-router-dom';
import {isMobile } from 'react-device-detect';
import {IoMenu, IoClose} from 'react-icons/io5'
// import {AuthContext } from '../../contexts'
const navBarData = [
    {
        title: 'HOME',
        link: '/home'
    },
    {
        title: 'ABOUT US',
        link: '/home/about'
    },
    {
        title: 'CONTACT US',
        link: '/contact'
    },
    {
        title: 'BLOG',
        link: '/home/blog',
    },
    {
        title: 'ACCOUNT',
        link: '/login'
    },
    {
        title: 'MENU',
        link: ''
    },
]

const HeaderNavigationBar = () => {
    // const {refreshToken} = useContext(AuthContext)
    const history = useHistory()
    const [navOpen, setNavOpen] = React.useState(false)
    let currLink = useLocation().pathname

    const navClick = (link) =>{
        setNavOpen(false)
        history.push(link)
    }

    return (
        <div className={classes.navigationHeader}>
           {!isMobile?
            <div>
              {navBarData.slice(0,4).map((item,index)=>{
                return (
                <Link to={item.link} key={index} style={{textDecorationLine:'none'}}>
                    <text className={`${classes.navBarItems} ${currLink===item.link? classes.activeNavBarItems: null}`} style={theme.textVariants.button}>
                        {item.title}
                    </text>
                </Link>)
              })}
            </div>
            :
            <>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
               <IoMenu style={{display:!navOpen? 'block': 'none'}} onClick={()=>setNavOpen(true)} size={30} color='white'/>
            </div>
            <div style={{transform:!navOpen?'translate(-100%,0px)':'translate(0%,0px)'}} className={classes.mobileNavBar}>
                <IoClose onClick={()=>setNavOpen(false)} style={{alignSelf:'flex-end'}} size={30} color='white'/>
                {navBarData.map((item,index)=>{
                    return (
                        <div key={index} onClick={()=>navClick(item.link)} className={`${classes.mobileNavBarItem}`} to={item.link} style={{textDecorationLine:'none'}}>
                            <text>{item.title}</text>
                        </div>
                    )
                })}
            </div>
            </>
            }
        </div>
    )
}

export default HeaderNavigationBar