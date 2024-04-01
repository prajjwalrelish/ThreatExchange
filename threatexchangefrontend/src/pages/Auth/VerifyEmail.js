import React from 'react'
import theme from '../../theme'
import classes from './Auth.module.css'
import { ButtonContained} from '../../components'
import Logo from '../../assets/images/BrandLogo.png'
import {AiOutlineClose} from 'react-icons/ai'
import * as Routes from '../../Routes'
import {useHistory, useLocation, Redirect} from 'react-router-dom'
export default function VerifyEmail() {
    const history = useHistory()
    const props = useLocation().state
    return (
        <div style={{backgroundColor:theme.colors.lightDark}} className={classes.authPage}>
            {props?.message===undefined? <Redirect to='/home'/>:null}
            <AiOutlineClose onClick={()=>history.push(Routes.home)} className={classes.crossIcon}/>
            <img width='300px' style={{alignSelf:'center'}} height='30px' src={Logo} alt='brand-logo'/>
            <div style={{textAlign:'center',marginBlock:20}}>
                <text style={theme.textVariants.body}>{props?.message}</text>
            </div>
            <ButtonContained onClick={()=>history.replace('/login')} label='LOGIN'/>
        </div>
    )
}
