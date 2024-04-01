import React, { useContext, useState } from 'react'
import {AuthContext} from '../../contexts'
import theme from '../../theme'
import classes from './Auth.module.css'
import {TextInput, ButtonContained, FormError} from '../../components'
import Logo from '../../assets/images/BrandLogo.png'
import {FiMail} from 'react-icons/fi'
import {AiFillLock, AiOutlineClose} from 'react-icons/ai'
import { Link, Redirect, useHistory} from 'react-router-dom'
import {emailValid, passwordValid} from '../../utils/FormValidator'
import * as Routes from '../../Routes'
import {CheckEmail} from '../../api'

export default function Login() {
    const history = useHistory()
    const {refreshToken,login} = useContext(AuthContext)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState('')
    const [policyCheck, setPolicyCheck] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error , setError] = useState('')
    const toggleCheckBox = () =>{
        setPolicyCheck(!policyCheck)
    }

    const handleEmail = async(e)=>{
        setError('')
        setEmail(e)
        if(!emailValid(e)){
            setError('Invalid Email Address')
            return false
        }
        const res = await CheckEmail(e)

        if(res.status===400){
            setError('user with this email not exist.')
            return false
        }
        return true
    }

    const handleLogin = async (e) =>{
        e.preventDefault()
        setError('')
        setLoading(true)
        const checkEmail = await handleEmail(email)
        if(!checkEmail){
            return setLoading(false)
        }
        if(!passwordValid(password)){
            setLoading(false)
            return setError('Password must contain atleast a-z, A-Z and 0-9')
        }
        
        const result = await login({email:email, password:password})
        if(result.status===200){
            console.log('logged In')
            return history.replace('/dashboard')
        }
        else if(result.status===500){
            setLoading(false)
            return setError('Invalid Email and Password or this email is not verified !')
        }
        else if(result.status===401){
            setLoading(false)
            return setError('Please verify your email then login!')
        }
        setError('Something went wrong')
        setLoading(false)
    }
    
    return (
        <form onSubmit={(e)=>handleLogin(e)}>
                {refreshToken? <Redirect to='/'/> : null}
            <AiOutlineClose onClick={()=>history.push(Routes.home)} className={classes.crossIcon}/>
            <div style={{backgroundColor:theme.colors.lightDark}} className={classes.authPage}>
                <img width='300px' style={{alignSelf:'center'}} height='30px' src={Logo} alt='brand-logo'/>
                <div style={{marginTop:100,marginBottom:50}}>
                <TextInput 
                    value={email} 
                    // setEmail(value)
                    onChange={(e)=>handleEmail(e)} 
                    type='email' 
                    placeholder='Email' 
                    Icon={<FiMail size={30} color='black'/>} 
                />
                <TextInput 
                    value={password} 
                    onChange={(e)=>setPassword(e)} 
                    type='password' 
                    placeholder='Password' 
                    Icon={<AiFillLock size={30} color='black'/>} 
                />
                </div>
                <div className={classes.customCheckbox}>
                        <input type="checkbox" checked={policyCheck} onChange={()=>toggleCheckBox()} name="terms" className="checkbox"/>
                        <label className="checkmark" for="checkbox-terms"> 
                            <span> Keep me logged In</span> 
                        </label>
                </div>
                <FormError message={error}/>
                <br/>
                <ButtonContained type='submit' loading={loading} disabled={loading} label='LOGIN'/>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:50}}>
                    <Link to='/forget-password' style={theme.buttonVariants.textButton}>Forget Password</Link>
                    <Link to='/register' style={theme.buttonVariants.textButton}>New User? Sign Up Here</Link>
                </div>
            </div>
        </form>
    )
}
