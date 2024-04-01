import React, { useContext, useEffect, useState } from 'react'
import theme from '../../theme'
import classes from './Dashboard.module.css'
import { DashboardCard, SearchInput, Loader } from '../../components'
// import {FaFilter} from 'react-icons/fa'
import {Search} from '../../algo'
import {AdversariesContext} from '../../contexts'
import { SelectInput } from '../../components'
// import { isMobile } from 'react-device-detect'
export default function Adversaries() {
    const {loading, advItems} = useContext(AdversariesContext)
    const [localItem, setLocalItem] = useState([])
    const [search , setSearch] = useState('')
    // const [filOpen, setFilOpen] = useState(false)
    // const [filLabel, setFilLabel] = useState([])

    // const setLabel = (filterLabels) =>{
    //     setFilLabel(filterLabels)
    //     onSearch(search,filterLabels)
    // }

    useEffect(()=>{
        setLocalItem(advItems)
    },[advItems])

    const onSearch = async(text) =>{
        setSearch(text)
        let search = text.trim()
        const res = await Search({advItems, search})
        setLocalItem(res)
    }

    const filOptions = [
        { value: 'none', label: 'None (0.0)' },
        { value: 'low', label: 'Low (1.0-3.9)' },
        { value: 'medium', label: 'Medium (4.0-6.9)' },
        { value: 'high', label: 'High (7.0-8.9)' },
        { value: 'critical', label: 'Critical (9.0-10.0)'}
      ]

      const [filter, setFilter] = useState(null)

    return (
        <div className={classes.adversaries}>
            <div style={{marginInline:10}}>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <SearchInput value={search} onChange={(text)=>onSearch(text)}/>

                <div className={classes.topFilterVul} style={{backgroundColor:theme.colors.lightDark}}>
                <div className={classes.filContent}>
                    <SelectInput
                        options={filOptions}
                        value={filter}
                        setValue={(filter)=>setFilter(filter)}
                        placeholder={'Filter By'}
                    />
                </div>
                <div className={`${classes.searchVul} ${classes.filContent}`}>
                <input
                        value={search}
                        // onChange={(e)=> setSearch(e.target.value)}
                        onChange={(e)=> onSearch(e.target.value)}
                        // onChange={(text)=>onSearch(text)}
                        placeholder={'search'}
                        />
                  </div>
                    <form className={`${classes.searchVul} ${classes.filContent}`}> 
                        
                        <button type='submit'>Search</button>
                    </form>
            
            </div>
                    {/* <div onClick={()=>setFilOpen(true)} className={classes.sortButton}>
                        <FaFilter size={15} color='white'/>
                        {!isMobile?
                        <text style={{color:'white',marginRight:5,fontSize:13}}>Filter By</text>
                        :null}
                        <text style={{color:'black',backgroundColor:'gray',fontSize:13,borderRadius:'50%',width:15,position:'absolute',marginBottom:35,marginLeft:75,justifySelf:'center',textAlign:'center',display:filLabel.length?'block':'none'}}>1</text>
                        <FilterMenu open={filOpen} setOpen={(e)=>setFilOpen(e)} label={(e)=>setLabel(e)}/>
                    </div> */}
                </div>
                <hr />
            </div>
            {loading?
            <div style={{marginTop:100}}>
                <Loader size={50}/>
            </div>
            :
            <div className={classes.dashboardItems}>
                {localItem?.length?
                <>
                {localItem.map((data,index)=>{
                    return <DashboardCard 
                                uuid={data.uuid}
                                primary_name={data.primary_name}
                                tools_used={data.tools_used} 
                                last_modified={data.last_modified} 
                                description={data.description} 
                                target_sectors={data.target_sectors}
                                target_countries={data.target_countries}
                                key={index} 
                                search={search}
                                />
                })}
                </>
                :
                <div style={{textAlign:'center',width:'100%',marginTop:100}}>
                    <text style={theme.textVariants.subHeading}>No Items</text>
                </div>}
            </div>
            }
        </div>
    )
}