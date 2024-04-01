import React, { useState } from 'react'
import theme from '../../theme'
import classes from './Auth.module.css'
import {TextInput, ButtonContained, FormError} from '../../components'
import { passwordValid } from '../../utils/FormValidator'
import Logo from '../../assets/images/BrandLogo.png'
import {AiFillLock, AiOutlineClose} from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import * as Routes from '../../Routes'
import * as Api from '../../api'
export default function ResetPassword() {
    const history = useHistory()
    const [password, setPassword] = useState('')
    const [passwordc, setPasswordc] = useState('')
    const [error, setError ] = useState('')
    const [loading, setLoading] = useState(false)
    const handleResetPassword = async(e) =>{
        e.preventDefault()
        setLoading(true)
        const params = new URLSearchParams(window.location.search)
        const valid = params.get("token_valid")
        const uidb64 = params.get("uidb64")
        const token = params.get("token")

        if(!passwordValid(password)){
            setLoading(false)
            return setError('Password must contain atleast a-z, A-Z and 0-9')
        }
        if(password!==passwordc){
            setLoading(false)
            return setError('Password do not match with Confirm password!')
        }
        if(valid && uidb64 && token){
            const result = await Api.PasswordReset({password:password,token:token,uidb64:uidb64})
            console.log(result)
            if(result.status===200){
                history.replace({pathname:'/message',state:{message:'Password successfully Changed'}})
            }
            else{
                setLoading(false)
                return setError('Link Expired!')
            }
        }
        else{
            history.push('/login')
        }
    }

    return (
        <form onSubmit={(e)=>handleResetPassword(e)}>
        <div style={{backgroundColor:theme.colors.lightDark}} className={classes.authPage}>
            <AiOutlineClose onClick={()=>history.push(Routes.home)} className={classes.crossIcon}/>
            <img width='300px' style={{alignSelf:'center'}} height='30px' src={Logo} alt='brand-logo'/>
            <div style={{marginTop:100,marginBottom:50}}>
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
             <FormError message={error}/>
             <br/>
            <ButtonContained loading={loading} type='submit' label="Reset Password"/>
        </div>
        </form>
    )
}
