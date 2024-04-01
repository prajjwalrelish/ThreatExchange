import React, { useContext, useState } from 'react'
import theme from '../../theme'
import classes from './Auth.module.css'
import {TextInput, ButtonContained, FormError} from '../../components'
import Logo from '../../assets/images/BrandLogo.png'
import {emailValid} from '../../utils/FormValidator'
import {FiMail} from 'react-icons/fi'
import { AuthContext } from '../../contexts'
import { Redirect, Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import * as Api from '../../api'

export default function ForgetPassword() {
    const {refreshToken} = useContext(AuthContext)
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')

    const handleEmail = async(e)=>{
        setError('')
        setEmail(e)
        if(!emailValid(e)){
            setError('Invalid Email Address')
            return false
        }
        const res = await Api.CheckEmail(e)
        if(res.status===400){
            setError('user with this email not exist.')
            return false
        }
        else if(res.status===200){
            return true
        }
        setError('something went wrong, Check your connection!')
        return false
    }

    const handleForgetPassowrd = async(e) =>{
        e.preventDefault()
        setLoading(true)
        const checkEmail = await handleEmail(email)
        if(!checkEmail){
            return setLoading(false)
        }
        const result = await Api.ForgetPassword({email:email,redirect_url:`${process.env.REACT_APP_WEB_URL}/reset-password`})
        if(result.status===200){
            setLoading(true)
            history.replace({pathname:'/message',state:{message:"We have sent you a URL to reset your password"}})
        }
        setLoading(false)
        setError('This email does not have registered account')
    }

    return (
        <form onSubmit={(e)=>handleForgetPassowrd(e)}>
            <div style={{backgroundColor:theme.colors.lightDark}} className={classes.authPage}>
                {!refreshToken? null:<Redirect to='/'/>}
                <img width='300px' style={{alignSelf:'center'}} height='30px' src={Logo} alt='brand-logo'/>
                <div style={{marginTop:100,marginBottom:10}}>
                    <TextInput 
                    value={email} 
                    onChange={(e)=>handleEmail(e)} 
                    type='email' 
                    placeholder='Email' 
                    Icon={<FiMail size={30} color='black'/>} 
                    />
                    <text style={theme.textVariants.label}>Enter your register email, we'll send you reset password link.</text>
                </div>
                <FormError message={error}/>
                <br/>
                <ButtonContained loading={loading} type='submit' label='SUBMIT'/>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:50}}>
                    <Link to='/login' style={theme.buttonVariants.textButton}>Remember the password? Login</Link>
                </div>
            </div>
        </form>
    )
}
