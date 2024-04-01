import React from 'react'
import theme from '../theme'
import {useHistory} from 'react-router-dom'
export default function Page404() {
    const history = useHistory()
    return (
        <div style={{width:'100%',height:'100vh',backgroundColor:theme.colors.lightDark,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <div>
                <text style={theme.textVariants.body}>404 Page Not Found</text>
            </div>
            <div style={{marginTop:30}}>
            <text onClick={()=>history.replace('/home')} style={button}>Go To Home Page</text>
            </div>
        </div>
    )
}

const button = {
    fontSize:20,
    color:'red',
    fontWeight:700,
    cursor:'pointer'
}
