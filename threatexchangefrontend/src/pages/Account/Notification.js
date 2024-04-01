import React, { useState } from 'react'
import classes from './Account.module.css'
import theme from '../../theme'
import {CheckBox, RadioButton, SelectInput} from '../../components'

const Notification = () => {
    const [emailFreq, setEmailFreq] = useState('')
    const [score, setScore] = useState('')

    
    return (
        <div className={classes.subscriptions}>
            <div className={classes.border}>
                <text className={classes.header}  style={{backgroundColor:theme.colors.footer}}>Report Filters </text>
                <div style={{padding:12}}>
                    <text style={{color:theme.colors.whiteoff,fontWeight:'bold',fontSize:15}}>When new cve is created:</text>
                    <div style={{marginBlock:10,paddingLeft:15}}>
                        <CheckBox check={true} toggleCheck={()=>{}} label={'be alerated'}/>
                    </div>
                    <text style={{color:theme.colors.whiteoff,fontWeight:'bold',fontSize:15}}>When new cve is updated, be alerated then:</text>
                    <div style={{marginBlock:10,paddingLeft:15}}>
                        <CheckBox check={true} toggleCheck={()=>{}} label={'its CVSS score change'}/>
                        <CheckBox check={true} toggleCheck={()=>{}} label={'its CPE list change'}/>
                        <CheckBox check={true} toggleCheck={()=>{}} label={'its summery change'}/>
                        <CheckBox check={true} toggleCheck={()=>{}} label={'its CWE list change'}/>
                        <CheckBox check={true} toggleCheck={()=>{}} label={'its referance list change'}/>
                    </div>
                    <text style={{color:theme.colors.whiteoff,fontWeight:'bold',fontSize:15}}>Be alerated when the CVSSv3 score is greater than or equal to :</text>
                    <div style={{marginBlock:10,marginBottom:30}}>
                        <SelectInput
                            value={score}
                            setValue={(selectedOption)=>setScore(selectedOption)}
                            options={scores}
                            maxMenuHeight={80}
                        />
                    </div>
                </div>
            </div>
            <div className={classes.border}>
                <text className={classes.header} style={{backgroundColor:theme.colors.footer}}>Emails</text>
                <div style={{padding:12}}>
                    <text style={{color:theme.colors.whiteoff,fontWeight:'bold',fontSize:15}}>Enable eamil notifications</text>
                    <RadioButton containerStyle={{paddingLeft:15,marginBlock:10}} values={['Yes','No']}/>
                    <text style={{color:theme.colors.whiteoff,fontWeight:'bold',fontSize:15}}>Email Frequency</text>
                    <div style={{marginBlock:10}}>
                        <SelectInput
                            value={emailFreq}
                            setValue={(selectedOption)=>setEmailFreq(selectedOption)}
                            options={notficiationOptions}
                            placeholder='Select email frequency'
                        />
                    </div>
                </div>
                <div style={{padding:15}}>
                <button style={{padding:10,marginTop:15,fontSize:18}} className={classes.button}>Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default Notification

const notficiationOptions = [
    { value: 'Daily', label: 'Daily' },
    { value: 'Weekly', label: 'Weekly' },
    { value: 'Monthly', label: 'Monthly' },
]

const scores = [
    { value: '0', label: '0' },
    { value: '500', label: '500' },
    { value: '1500', label: '1500' },
    { value: '2000', label: '2000' },
]
