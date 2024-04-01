import React, {  useState } from 'react'
import theme from '../../theme'
import classes from './Auth.module.css'
import {TextInput, ButtonContained, FormError} from '../../components'
import { emailValid, phoneValid } from '../../utils/FormValidator'
import Logo from '../../assets/images/BrandLogo.png'
import {AiOutlineClose} from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import * as Routes from '../../Routes'
import { ContactUS } from '../../api'
// import * as Api from '../../api'
export default function Contact() {
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [msg, setMsg] = useState('')
    const [error, setError ] = useState('')
    const [loading,setLoading] = useState(false)

    const handleContact = async(e) =>{
        e.preventDefault()
        setError('')
        if(name==='') return setError('Please enter your name')
        if(!emailValid(email)) return setError('Invalid email')
        if(!phoneValid(phone)) return setError('Phone number must be 10 digit')
        if(msg==='') return setError('Please enter your message')

        setLoading(true)
        const resp = await ContactUS({email:email,phone:phone,name:name,message:msg})
        if(resp.status===201){
            history.push('/')
        }
        else{
            setError(resp.data.error)
        }
        setLoading(false)
    }

    return (
        <form onSubmit={(e)=>handleContact(e)}>
        <div style={{backgroundColor:theme.colors.lightDark}} className={classes.authPage}>
            <AiOutlineClose onClick={()=>history.push(Routes.home)} className={classes.crossIcon}/>
            <img width='300px' style={{alignSelf:'center'}} height='30px' src={Logo} alt='brand-logo'/>
            <div style={{marginTop:100,marginBottom:50}}>
             <TextInput 
                value={name} 
                onChange={(e)=>setName(e)} 
                type='name' 
                placeholder='Name' 
                textLeft={true}
             />
             <TextInput 
                value={email} 
                onChange={(e)=>setEmail(e)} 
                type='email' 
                placeholder='E-mail' 
                textLeft={true}
             />
            <TextInput 
                value={phone} 
                onChange={(e)=>setPhone(e)} 
                type='phone' 
                placeholder='Phone' 
                textLeft={true}
             />
            <TextInput 
                value={msg} 
                onChange={(e)=>setMsg(e)} 
                type='text' 
                placeholder='Message' 
                textLeft={true}
                multiline={true}
             />
             </div>
             <FormError message={error}/>
             <br/>
            <ButtonContained loading={loading} type='submit' label="SUBMIT"/>
        </div>
        </form>
    )
}
