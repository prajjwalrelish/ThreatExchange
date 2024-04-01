import React, { useState } from 'react'
import theme from '../../theme'
import classes from './Menu.module.css'
import {AiOutlineClose} from 'react-icons/ai'
import ClickAwayListener from 'react-click-away-listener';

const FilterMenu = ({open,setOpen,label}) =>{
    const [remLabel, setRemLabel] = useState(labels)
    const [selectedLabel, setSelectedLabel] = useState([])

    const unselect = (indexPos) =>{
        let item = selectedLabel[indexPos]
        let selectedlabel = selectedLabel.filter((value,index,arr)=>{ return index!==indexPos})
        setSelectedLabel(selectedlabel)
        let remlabel = remLabel
        remlabel.push(item)
        setRemLabel(remlabel)
        label(selectedlabel)
    }
    const select = (indexPos) =>{
        let item = remLabel[indexPos]
        let remlabel = remLabel.filter((value,index,arr)=>{ return index!==indexPos})
        setRemLabel(remlabel)
        let selectedlabel = selectedLabel
        selectedlabel.push(item)
        setSelectedLabel(selectedlabel)
        label(selectedlabel)
    }

    const handleClickAway = () => {
        if(open){
            setOpen(false)
        }
	};

    return(
        <ClickAwayListener onClickAway={handleClickAway}>
            <div style={{marginTop:200,padding:5,paddingTop:10,backgroundColor:theme.colors.footer,maxWidth:200}} className={`${classes.dropdownContent} ${open? classes.show : null}`}>
                <text style={{color:'white',fontSize:15,paddingBlock:2,paddingInline:10}}>Select Label</text>
                <hr/>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                    {selectedLabel.length?
                    <>
                    {
                        selectedLabel.map((data,index)=>{
                            return <div onClick={()=>unselect(index)} className={classes.label} style={{backgroundColor:'#424242'}} key={index}><text>{data}</text><AiOutlineClose color='white' size={15}/></div>
                        })
                    }
                    </>
                    :null}
                    <div/>
                    {remLabel.length?
                    <>
                    {
                        remLabel.map((data,index)=>{
                            return <div onClick={()=>select(index)} className={classes.label} key={index}><text>{data}</text></div>
                        })
                    }
                    </>
                    :null}
                </div>
            </div>
        </ClickAwayListener>
    )
}
const labels = ['label0','label1','label2','label3','label4','no label']
export default FilterMenu