import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import classes from './Menu.module.css'
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'

const ScrollableMenu = ({items}) =>{

    return(
        <ScrollMenu
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
                scrollContainerClassName={classes.scrollMenu}
            >
            {items.map((data,index)=>{
                return(
                    <Card
                        itemId={index} 
                        title={data}
                        key={index}
                    />
                )
            })}
        </ScrollMenu>
    )
}


const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)
  
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <AiOutlineRight onClick={()=>scrollNext()} size={20} style={{display:isLastItemVisible? 'none':'block'}} color='white'/>
        </div>
    );
  }
  const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)
  
    return (
        <div  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <AiOutlineLeft onClick={()=>scrollPrev()} size={20} style={{display:isFirstItemVisible? 'none':'block'}} color='white'/>
        </div>
    );
  }

const Card = ({
    onClick,
    selected,
    title,
    itemId
  }) => {
    // const visibility = React.useContext(VisibilityContext)
  
    return (
        <div style={{paddingBlock:3}}>
        <text tabIndex={0} className={classes.scrollLabel} >{title}</text>
        </div>
    );
  } 

export default ScrollableMenu