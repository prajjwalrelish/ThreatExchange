import React from 'react'
import theme from '../../theme'

export default function About() {
    return (
        <div style={{backgroundColor:theme.colors.dark,width:'100%',height:'100vh',justifyContent:"center",display:'flex',alignItems:'center'}}>
            <text style={theme.textVariants.title}>About Us</text>            
        </div>
    )
}
