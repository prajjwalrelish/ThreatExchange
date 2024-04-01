import React from 'react'
import classes from './Button.module.css'
import {FaLinkedin, FaTwitterSquare} from 'react-icons/fa'
export default function SocialButtonsGroup({color, size, containerStyle}) {
    return (
        <div style={containerStyle}>
            <FaLinkedin className={classes.socialIconButton} color={color? color:'white'} size={size? size:32}/>
            <FaTwitterSquare className={classes.socialIconButton} color={color?color:'white'} size={size? size:32}/>
        </div>
    )
}
