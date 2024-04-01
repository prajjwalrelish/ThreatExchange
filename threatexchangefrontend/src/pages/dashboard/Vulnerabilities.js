import React, { useState, useEffect, useContext } from 'react'
import theme from '../../theme'
import classes from './Dashboard.module.css'
import classes2 from '../../styles/Dashboard.module.css'

import { SelectInput, Paginate, Loader } from '../../components'
import {Link, useHistory} from 'react-router-dom'
import styles from '../apt/AptGroup.module.css'
import { DataContext } from '../../contexts'
import { useLocation } from 'react-router-dom'

import { GetCves } from '../../api'

export default function Vulnerabilities() {
    const history = useHistory()
    const location = useLocation()
    let page = new URLSearchParams(window.location.search).get('page');
    // const [currPage,setCurrPage] = useState(Number(page) && Number(page)>0? Number(page):1)
    const [tag, setTag] = useState('')
    const [filter, setFilter] = useState(null)
    const [search, setSearch] = useState("")
    const [cves, setCves] = useState({})
    const [currPage,setCurrPage] = useState(1)
    const [count, setCount] = useState(0)


    // const {fetchCves,cves} = useContext(DataContext)
    useEffect(()=>{

          fetchData()

        // let query = new URLSearchParams(window.location.search)
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
        // if(query.get('filter')){
        //     const f = query.get('filter')
        //     const fil = filOptions.filter((data)=>data.value===f)
        //     if(!fil.length){
        //         query.set('filter','')
        //         history.push({search:query.toString()})
        //     }
        //     else{
        //         setFilter(fil[0])
        //     }
        // }
        // if(query.get('search')){
        //     const s = query.get('search')
        //     setSearch(s)
        // }
    },[currPage])

    const fetchData = async () => {
        const { data } = await GetCves(currPage);
        setCves( data.results );
        setCount( Math.ceil(data.count / 20) );
    }

    // useEffect(()=>{
    //     let query = new URLSearchParams(location.search).get('page')
    //     if(Number(query)){
    //         fetchCves({page:query,filter:filter?.value,search:search})
    //     }
    // },[location.search])

    const changePage = async(page) =>{
        setCurrPage(page)
        // let query = new URLSearchParams(location.search)
        // query.set('page',String(page))
        // history.push({search:query.toString()})
    }

    const onSearch = (text) =>{
        setSearch(text)
        if(text === ""){
        //   setCurrPage(1)
          fetchData(currPage)
        }
        else {
        
        let search = text.trim()
        const res = Search({cves, search})
        setCves(res)
        setCount( Math.ceil(res.count / 20) );
        }
      }
      
      const Search = ({cves,search}) =>{
        
        let result = [...cves]
        result = result.filter(item=>{
            const dateUpdated = new Date(item.updated_at).toLocaleDateString()
            const dateCreated = new Date(item.created_at).toLocaleDateString()
            return  item.cve_id.toLowerCase().includes(search.toLowerCase()) ||
                    dateUpdated.toLowerCase().includes(search.toLowerCase()) ||
                    dateCreated.toLowerCase().includes(search.toLowerCase())
        })
        return result
      }

    const dataFilter = (e) =>{
        e.preventDefault()
        // let query = new URLSearchParams(location.search)
        
        // if(query.get('page')){
        //     query.set('page','1')
        // }
        // else{
        //     query.append('page','1')
        // }
        // if(query.get('filter')){
        //     query.set('filter',filter? filter?.value : '')
        // }
        // else{
        //     query.append('filter',filter? filter?.value : '')
        // }
        // if(query.get('search')){
        //     query.set('search',search? search: '')
        // }
        // else{
        //     query.append('search',search? search: '')
        // }
        // setCurrPage(1)
        // history.push({search:query.toString()})
    }

    return (
        <div style={{backgroundColor:theme.colors.dark,paddingInline:20,paddingBlock:20}}>
            <text style={{fontSize:20,color:theme.colors.whiteoff}}>Vulnerabilities</text>
            <div className={classes.topFilterVul} style={{backgroundColor:theme.colors.lightDark}}>
                <div className={classes.filContent}>
                    <SelectInput
                        options={tagOptions}
                        value={tag}
                        setValue={(selectedTag)=>setTag(selectedTag)}
                        placeholder={'Select a Tag'}
                    />
                </div>
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
                        placeholder={'search'}
                        />
                    </div>
                    <form onSubmit={(e)=>dataFilter(e)} className={`${classes.searchVul} ${classes.filContent}`}> 
                        <button type='submit'>Search</button>
                    </form>
            </div>
            <div className={classes2.border}>
                <div className={classes.innerVal}>
                    {cves===null?
                        <div><Loader size={30}/></div>
                        :
                        <table style={{width:'100%',minWidth:'800px',textAlignLast:'center',color:theme.colors.whiteoff,wordBreak:'break-all',textAlign:'center'}}>
                            <tr>
                                <th style={{borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10}}>APT</th>
                                {/* <th style={{borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10}}>Groups</th> */}
                                <th style={{minwidth:'180px',borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10}}>Attacks</th>
                                <th style={{minwidth:'180px',borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10}}>Updated</th>
                                <th style={{minwidth:'180px',borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10}}>Created</th>
                            </tr>
                        <>
                        {cves.length?
                            <>
                            {cves.map((data,index)=>{
                                return(
                                    <>
                                    <tr className={`${styles.row} ${index%2==0? styles.even:null} `}>
                                        {/* <td width={'24%'} style={{minwidth:'180px',paddingBlock:10}}><Link className={classes.linkTag} to={`/vulnerability/${data.id}`}>{data.cve_id}</Link></td> */}
                                        <td width={'24%'} style={{minwidth:'180px',paddingBlock:10}}>{data.cve_id}</td>
                                        <td width={'24%'} style={{minwidth:'180px',textAlign:'center',paddingLeft:18}}>{Math.floor(Math.random(1,4)*10)}</td>
                                        <td width={'24%'} style={{minwidth:'180px',textAlign:'center',paddingLeft:18}}>{new Date(data.updated_at).toLocaleDateString()}</td>
                                        <td width={'24%'} style={{minwidth:'180px',textAlign:'center',paddingLeft:18}}>{new Date(data.created_at).toLocaleDateString()}</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontSize:14,color:'rgba(255,255,255,0.5)',textAlignLast:'left'}} colspan="4">{data.summary}</td>
                                    </tr>
                                    </>
                                    )
                                })}
                            </>
                        :
                            <div><h6 style={{color:'white',fontSize:12}}>No Cves Found !</h6></div>
                        }
                        </>
                        </table>
                    }
                    <div style={{display:'flex'}}>
                    {count>1 && <Paginate currPage={currPage} setPage={(v)=>changePage(v)} count={count}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

const data = [
    ['APT-24','Black Panda','234','10 Apr,2020'],
    ['APT-24', 'Wicked Spider (CrowdStrike)','10','1 Jan,2021'],
    ['APT-32', 'Black Panda','234','12 Mar,2021'],
    ['APT-22','Bronze Butler, Tick','934','31 Dec,2019',],
    ['APT-12','White Panda','723','1 Jun,2018',],
    ['APT-34','Nomad Panda','20','3 Aug,2021',],
    ['APT-84','Toxic Panda','18','12 Mar,2021',],
    ['APT-95','Union Panda','100','2 Feb,2020',],
    ['APT-00','Wet panda','23','10 Nov,2019',],
]
const tagOptions = [
    // { value: 'Tag1', label: 'Tag1' },
    // { value: 'Tag2', label: 'Tag2' },
    // { value: 'Tag3', label: 'Tag3' },
    // { value: 'Tag4', label: 'Tag4' },
]
const filOptions = [
    { value: 'none', label: 'None (0.0)' },
    { value: 'low', label: 'Low (1.0-3.9)' },
    { value: 'medium', label: 'Medium (4.0-6.9)' },
    { value: 'high', label: 'High (7.0-8.9)' },
    { value: 'critical', label: 'Critical (9.0-10.0)'}
]