import React, { useState } from 'react'
import classes from './Input.module.css'
import {FiSearch} from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai'
export default function SearchInput({value, onChange}) {
    const [focus, setFocus] = useState(false)
    return (
        <div className={`${classes.searchBar} ${focus || value? classes.searchBarActive:null}`}>
            <FiSearch size={18} color='white'/>
            <input value={value} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} onChange={(e)=>onChange(e.target.value)} placeholder='Search here' className={`${classes.searchInput}`}/>
            <AiFillCloseCircle color={value? null:'transparent'} onClick={()=>onChange('')} className={classes.SearchClose} size={20}/>
        </div>
    )
}
