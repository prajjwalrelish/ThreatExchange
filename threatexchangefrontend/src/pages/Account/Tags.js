import React, { useState } from 'react'
import classes from './Account.module.css'
import theme from '../../theme'
import { TextInput } from '../../components'
export default function Tags() {
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    return (
        <div className={classes.subscriptions}>
            <div className={classes.border}>
                <text className={classes.header}  style={{backgroundColor:theme.colors.footer}}>My Tags</text>
                <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{padding:12}}>
                    <text style={theme.textVariants.para}>You not have any tag yet!</text>
                </div>
                </div>
            </div>
            <div className={classes.border}>
                <text className={classes.header} style={{backgroundColor:theme.colors.footer}}>Create Tag</text>
                <div style={{padding:12}}>
                 <text style={theme.textVariants.label}>Name</text>
                 <TextInput
                    placeholder='name'
                    value={name}
                    onChange={(e)=>setName(e)}
                    textLeft={true}
                    />
                 <text style={theme.textVariants.label}>Description</text>
                 <TextInput
                    placeholder='description'
                    value={des}
                    onChange={(e)=>setDes(e)}
                    textLeft={true}
                 />
                 <button style={{padding:10,marginTop:15,fontSize:18}} className={classes.button}>Add Tag</button>
                </div>
            </div>
        </div>
    )
}
