import React from 'react'
import theme from '../../theme'

export default function Contact() {
    return (
        <div style={{backgroundColor:theme.colors.dark,width:'100%',height:'100vh',justifyContent:"center",display:'flex',alignItems:'center'}}>
            <text style={theme.textVariants.title}>Contact Us</text>            
        </div>
    )
}
