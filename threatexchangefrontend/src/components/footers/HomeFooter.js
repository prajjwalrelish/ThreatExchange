import React from 'react'
import classes from './Footer.module.css'
import { SocialButtonsGroup } from '..'
import Logo from '../../assets/images/BrandLogo.png'
import {Link} from 'react-router-dom'
export default function HomeFooter() {
    return (
        <div className={classes.homeFooter}>
            <img height='25px' src={Logo} alt='brand-logo'/>
            
            <div className={classes.footerNavBarLinks}>
                <ul>
                    <li>
                        <Link to='/'> About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact'> Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/home/privacy-policy'> Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to='/home/cookie-policy'> Cookie Policy </Link>
                    </li>
                </ul>
            </div>
            <SocialButtonsGroup/>
        </div>
    )
}
