import React from 'react'
import classes from './Button.module.css'

export default function CheckBox({check, toggleCheck, label}) {
    return (
        <div className={classes.customCheckbox}>
                <input type="checkbox" checked={check} onChange={()=>toggleCheck()} name="terms" className="checkbox"/>
                <label className="checkmark" for="checkbox-terms"> {label}</label>
        </div>
    )
}
