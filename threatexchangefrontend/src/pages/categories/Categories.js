import React, { useContext, useEffect, useState } from 'react'
import theme from '../../theme'
import classes from '../../styles/Dashboard.module.css'
import styles from '../apt/AptGroup.module.css'
import {SearchInput, Paginate, Col} from '../../components'
import { Loader } from '../../components'
import {DataContext} from '../../contexts'
import {useHistory,useLocation} from 'react-router-dom'
import dashClasses from '../../styles/Dashboard.module.css'
import { GetCwes } from '../../api'

const Categories = () =>{
    // const {fetchCwes,cwes} = useContext(DataContext)
    const history = useHistory()
    const location = useLocation()
    let q = new URLSearchParams(window.location.search);
    let page = q.get('page')
    let s = q.get('search')
    // const [currPage,setCurrPage] = useState(Number(page) && Number(page)>0? Number(page):1)
    const [search, setSearch] = useState('')
    const [currPage,setCurrPage] = useState(1);
    const [cwes, setCwes] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(()=>{

        const fetchData = async () => {
            if(search === ''){
            const { data } =  await GetCwes(currPage,'');
            setCwes(data.results);
            setCount( Math.ceil(data.count / 20) );
            }
        }
          fetchData()

        // const query = new URLSearchParams(location.search)
        // if(!location.search || !Number(page) || Number(page)<1){
        //     const p = query.get('page')
        //     if(p){
        //         query.set('page','1')
        //     }
        //     else{
        //         query.append('page','1')
        //     }
        //     history.push({search:query.toString()})
        // }
    },[currPage])

    // useEffect(()=>{
    //     fetchCwes({page:currPage,search:search})
    // },[location.search])

    const changePage = async(page) =>{
        setCurrPage(page)
        getFilteredCwes(page)
        // let query = new URLSearchParams(location.search)
        // query.set('page',String(page))
        // history.push({search:query.toString()})
    }

    const searchData = (e) =>{
        
        e.preventDefault()
        setCurrPage(1)
        getFilteredCwes(1)
        // let query = new URLSearchParams(location.search)
        // query.set('search',search)
        // query.set('page','1')
        // setCurrPage(1)
        // history.push({search:query.toString()})
    }

    const getFilteredCwes = async(currSearchPage) =>{
        const { data } =  await GetCwes(currSearchPage,search);
        setCwes(data.results);
        setCount( Math.ceil(data.count / 20) );
    }
    

    return(
        <div className={styles.aptGroupPage} style={{paddingInline:20,paddingTop:20}}>
            <div className={styles.left}>
                <text style={{fontSize:20,color:theme.colors.whiteoff}}>Categories (TC)</text>
                <div className={`${classes.border} ${styles.overflowBox}`}>
                    <div style={{borderBottom:`1px solid ${theme.colors.whiteoff}`,width:'100%',paddingBlock:5}}>
                        <text style={{color:'white',fontSize:16}}>Threat Card Categories</text>    
                    </div>
                    {cwes===null?
                        <div style={{paddingBlock:20}}><Loader size={30}/></div>
                        :
                        <table style={{width:'100%',minWidth:'800px',textAlignLast:'center',color:theme.colors.whiteoff,wordBreak:'break-all',textAlign:'center'}}>
                            <tr>
                                <th style={{borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10,fontSize:18}}>
                                    CWE ID
                                </th>
                                <th style={{borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10,fontSize:18}}>
                                    CWE Name
                                </th>
                            </tr>
                        <>
                        {cwes.length?
                            <>
                            {cwes.map((item,index)=>{
                                return(
                                    <>
                                    <tr className={`${styles.row} ${index%2==0? styles.even:null}`}>
                                        <td width={'24%'} style={{minwidth:'180px',paddingBlock:10}}>
                                            {item.cwe_id}
                                        </td>
                                        <td width={'24%'} style={{minwidth:'180px',paddingBlock:10}}>
                                            {item.name}
                                        </td>
                                    </tr>
                                    </>
                                    )
                                })}
                            </>
                        :
                            <div><h6 style={{color:'white',fontSize:12}}>No Cwes Found !</h6></div>
                        }
                        </>
                        </table>
                        }
                        <div style={{display:'flex'}}>
                            {cwes?.length && count>1 ?
                            <Paginate currPage={currPage} setPage={(v)=>changePage(v)} count={count}/>
                            :null}
                        </div>
                </div>
            </div>
            <div className={`${styles.right} ${classes.border}`}>
                <div style={{borderBottom:`1px solid ${theme.colors.whiteoff}`,width:'100%',paddingBlock:5}}>
                    <text style={{color:'white',fontSize:16}}>Search</text>    
                </div>
                <form onSubmit={(e)=>searchData(e)} style={{marginTop:10,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <input
                        className={dashClasses.dashInput}
                        value={search} 
                        style={{width:'73%'}}
                        onChange={(e)=>setSearch(e.target.value)}
                        placeholder='Search here'
                    />
                    <button
                        className={dashClasses.dashButton}
                        type='submit'>Search</button>
                </form>
            </div>
        </div>
    )
}
const data = [
    ['APT-24', 'Wicked Spider (CrowdStrike)'],
    ['APT-32', 'Black Panda'],
    ['APT-22','Bronze Butler, Tick'],
    ['APT-12','White Panda'],
    ['APT-34','Nomad Panda'],
    ['APT-84','Toxic Panda'],
    ['APT-95','Union Panda'],
    ['APT-00','Wet panda'],
    ['APT-973','Ghost jackal'],
    ['APT-24', 'Wicked Spider (CrowdStrike)'],
    ['APT-32', 'Black Panda'],
    ['APT-22','Bronze Butler, Tick'],
    ['APT-12','White Panda'],
    ['APT-34','Nomad Panda'],
    ['APT-84','Toxic Panda'],
    ['APT-95','Union Panda'],
    ['APT-00','Wet panda'],
    ['APT-973','Ghost jackal'],
    ['APT-24', 'Wicked Spider (CrowdStrike)'],
    ['APT-32', 'Black Panda'],
    ['APT-22','Bronze Butler, Tick'],
    ['APT-12','White Panda'],
    ['APT-34','Nomad Panda'],
    ['APT-84','Toxic Panda'],
    ['APT-95','Union Panda'],
    ['APT-00','Wet panda'],
    ['APT-973','Ghost jackal']
]
export default Categories