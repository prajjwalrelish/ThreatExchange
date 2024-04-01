import React, { useState } from 'react'
import theme from '../../theme'
import classes from './Card.module.css'
import {BsBookmarks,BsBookmarksFill} from 'react-icons/bs'
import Highlighter from "react-highlight-words";
import {ScrollableMenu} from '..'
import {useHistory} from 'react-router-dom'
const DashboardCard = ({uuid, primary_name, target_sectors, target_countries, description, tools_used,last_modified, search}) =>{
    const [save, setSave] = useState(false)
    const history = useHistory()
        
    const saveClick = () =>{
        setSave(!save)
    } 

    return(
        <div style={{backgroundColor:theme.colors.footer}} className={classes.card}>
        <div  onClick={()=>history.push(`/adversary/${uuid}`)}>
            <div className={classes.top}>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <div className={classes.icon}>{primary_name.substring(0,2)}</div>
                    <div style={{display:'flex',flexDirection:'column',marginLeft:10}}>
                        <text style={theme.buttonVariants.textButton}>
                        <Highlighter
                            highlightClassName={classes.hightlight}
                            searchWords={search.split(' ')}
                            textToHighlight={(`${primary_name}`).substring(0,30)}
                        />
                        </text>
                        <text style={{fontSize:12,color:'white'}}>Updated on {(new Date(last_modified)).toDateString()}</text>
                    </div>
                </div>
                <div className={classes.saveButton}>
                    {!save? <BsBookmarks onClick={()=>saveClick()} color='white' size={25}/> : <BsBookmarksFill onClick={()=>saveClick()} color='white' size={25}/>}
                </div>
            </div>
            <div style={{paddingTop:10}}>
            <text max={20} style={{fontSize:15,color:'white',justifySelf:'center'}}>
                <Highlighter
                    highlightClassName={classes.hightlight}
                    searchWords={search.split(' ')}
                    textToHighlight={`${(`${description}`).substring(0,150)} ${description.length>150?'...':null}`}
                />
            </text>
            </div>
        </div>
            <text style={{color:theme.colors.gray,fontWeight:'bold',fontSize:14,marginTop:3}}>Country of Origin : <text style={{color:theme.colors.white}}>China</text></text>
        <div style={{display:'flex',flexDirection:'column',marginTop:15}}>
            <text style={{color:theme.colors.gray,fontWeight:'bold',fontSize:12}}>Target Sectors</text>
            <ScrollableMenu
              items={target_sectors}
            />
            <div style={{marginBlock:5}}/>
            <text style={{color:theme.colors.gray,fontWeight:'bold',fontSize:12}}>Target Countries</text>
            <ScrollableMenu
              items={target_countries}
            />
        </div>
        </div>
    )
}


export default DashboardCard