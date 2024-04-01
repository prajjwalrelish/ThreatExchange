import React from 'react'
import classes from './Button.module.css'
import theme from '../../theme'
export default function RadioButton({title,values,containerStyle,}) {
    return (
        <div style={containerStyle} className={classes.container}>
        {title?<text className={classes.inputTitle} style={theme.textVariants.label}>{title}</text>:null} 
        <form style={{display:'flex',flexDirection:'column'}}>
           { values.map(data=>{
               return <div style={{marginBlock:5}}><input id={data} type="radio" style={{height:14,width:14}} name="fruit" value={data} /><label htmlFor={data}><text style={theme.textVariants.label}>{data}</text></label></div>
            })
        }
        </form>
        </div>
    )
}
