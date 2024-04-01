import React from 'react'
import theme from '../../theme'
import classes from './Dashboard.module.css'

export default function Overview() {
    return (
        <div className={classes.adversaries}>
            <text style={theme.textVariants.body}> Welcome to Dashboard </text>
        </div>
    )
}
