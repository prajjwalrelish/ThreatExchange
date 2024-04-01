import React, { useContext, useState } from 'react'
import theme from '../../theme'
import classes from './Auth.module.css'
import {TextInput, ButtonContained, FormError} from '../../components'
import Logo from '../../assets/images/BrandLogo.png'
import { AuthContext } from '../../contexts'
import { emailValid, passwordValid } from '../../utils/FormValidator'
import {FiMail} from 'react-icons/fi'
import {AiFillLock, AiOutlineClose} from 'react-icons/ai'
import * as Routes from '../../Routes'
import {CheckEmail} from '../../api'
import { Link , Redirect, useHistory} from 'react-router-dom'

export default function SignUp() {
    const {refreshToken, register} = useContext(AuthContext)
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordc, setPasswordc] = useState('')
    const [policyCheck, setPolicyCheck] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    
    const toggleCheckBox = () =>{
        setPolicyCheck(!policyCheck)
    }

    const handleEmail = async(e)=>{
        setError('')
        setEmail(e)
        if(!emailValid(e)){
            return setError('Invalid Email Address')
        }
        const res = await CheckEmail(e)

        if(res.status===200){
            setError('user with this email already exists.')
            return false
        }
        return true
    }

    const handleSignUp = async (e) =>{
        e.preventDefault()
        setError('')
        setLoading(true)
        let bodyData = new FormData()
        const checkEmail = await handleEmail(email)
        if(!checkEmail){
            return setLoading(false)
        }
        bodyData.append('email',email)
        if(!passwordValid(password)){
            setLoading(false)
            return setError('Password must contain atleast a-z, A-Z and 0-9')
        }
        bodyData.append('password',password)
        bodyData.append('username',email)
        if(password!==passwordc){
            setLoading(false)
            return setError('Password do not match with confirm password')
        }
        if(!policyCheck){
            setLoading(false)
            return setError('You must agree with privacy policy')
        }
        const result = await register({'email':email,'username':email,'password':password})
        
        if(result.status===201){
            console.log('Successfully registered')
            return history.replace({pathname:'/message',state:{message:'Congratulations You are Successfully Register, We have sent you a Acccount Activation Link' }})
        }
        else if(result.status===400){
            setLoading(false)
            return setError(result.data.errors? result.data.errors.email ? result.data.errors.email : result.data.errors.username : 'Something went wrong')
        }
        setError('Something went wrong')
        setLoading(false)
    }

    return (
        <form onSubmit={(e)=>handleSignUp(e)}>
            <div style={{backgroundColor:theme.colors.lightDark}} className={classes.authPage}>
                {refreshToken? <Redirect to='/'/> : null}
                <AiOutlineClose onClick={()=>history.push(Routes.home)} className={classes.crossIcon}/>
                <img width='300px' style={{alignSelf:'center'}} height='30px' src={Logo} alt='brand-logo'/>
                <div style={{marginTop:100,marginBottom:50}}>
                <TextInput 
                    value={email} 
                    onChange={(e)=>handleEmail(e)} 
                    type='email' 
                    placeholder='Enter your email address' 
                    Icon={<FiMail size={30} color='black'/>} 
                />
                <TextInput 
                    value={password} 
                    onChange={(e)=>setPassword(e)} 
                    type='password' 
                    placeholder='Create password' 
                    Icon={<AiFillLock size={30} color='black'/>} 
                />
                <TextInput 
                    value={passwordc} 
                    onChange={(e)=>setPasswordc(e)} 
                    type='password' 
                    placeholder='Confirm password' 
                    Icon={<AiFillLock size={30} color='black'/>} 
                />
                </div>
                <div className={classes.customCheckbox}>
                        <input type="checkbox" checked={policyCheck} onChange={()=>toggleCheckBox()} name="terms" className="checkbox"/>
                        <label className="checkmark" for="checkbox-terms"> 
                            <span>  I consent to Threat Exchange
                                <Link target='_blank' to='/home/privacy-policy'> Privacy Policy</Link>
                            </span> 
                        </label>
                </div>
                <FormError message={error}/>
                <br/>
                <ButtonContained loading={loading} type='submit' label='REGISTER'/>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:50}}>
                    <Link to='/login' style={{textDecorationLine:'none',color:'#a6a6a6',fontWeight:'bold'}}>Existing User? Login Here</Link>
                </div>
            </div>
        </form>
    )
}
