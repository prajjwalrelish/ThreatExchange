import React, { useState, useEffect } from 'react'
import theme from '../../theme'
import {TextInput,ButtonContained} from '../../components'
import classes from './Account.module.css'

export default function Profile({email}) {
    // const [name, setName] = useState('')
    
    // const jwt = Cookies.get('access')
    // console.log("jwt ",jwt)
    // const [password, setPassword] = useState('')

    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',paddingBlock:50,minHeight:'40vh'}}>
            <div className={classes.profile}>
                <div style={{textAlign:'center'}}>
                <text style={theme.textVariants.subHeading}>Edit Profile</text>
                </div>
                <br/>
                <text style={theme.textVariants.label}>Email Address</text>
                <TextInput
                   placeholder={'Email'}
                   value={email}
                //    onChange={(e)=>setEmail(e)}
                   textLeft={true}
                />
                {/* <text style={theme.textVariants.label}>Name</text> */}
                {/* <TextInput
                   placeholder={'Name'}
                   value={name}
                   onChange={(e)=>setName(e)}

                   textLeft={true}
                /> */}
                <div style={{display:'flex',justifyContent:'center',marginTop:30}}>
                <ButtonContained label={'Update Profile'} />
                </div>
                {/* <div style={{textAlign:'center',marginTop:80}}>
                <text style={theme.textVariants.subHeading}>Change Password</text>
                </div>
                <br/>
                <text style={theme.textVariants.label}>Current password</text>
                <TextInput
                   placeholder={'Password'}
                   value={password}
                   onChange={(e)=>setPassword(e)}
                   textLeft={true}
                   type='password'
                />
                <div style={{display:'flex',justifyContent:'center',marginTop:30}}>
                <ButtonContained label={'Reset Password'} />
                </div> */}
            </div>
        </div>
    )
}
