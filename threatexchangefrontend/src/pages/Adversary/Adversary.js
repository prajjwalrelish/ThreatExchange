import React, { useContext, useEffect, useState } from 'react'
import {GetCard} from '../../api'
import theme from '../../theme'
import classes from './Adversary.module.css'
import { Redirect,useLocation} from 'react-router-dom'
import { BackButton, Loader } from '../../components'
import {AuthContext} from '../../contexts'
import {MdOutlineContentCopy} from 'react-icons/md'
import { Header } from '../../components'
const Adversary = () => {
    const [data,setData] = useState(null)
    const {refreshToken} = useContext(AuthContext)
    const [operations, setOperations] = useState([])

    const currLink = useLocation().pathname
    useEffect(()=>{
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currLink])

    const fetchData = async() =>{
        const uuid = currLink.substring(currLink.lastIndexOf('/')+1)
        const result = await GetCard(uuid)
        if(result.status===200){
            setData(result.data)
            let op = []
            if(result.data.operations_performed)
            Object.keys(result.data.operations_performed).forEach((key)=>{
                op.push({key:key,op: result.data.operations_performed[key]})
            })
            setOperations(op)
        }
    }
    return (
        <div style={{backgroundColor:theme.colors.dark}} className={classes.adversary}>
            <Header/>
            {refreshToken? null:<Redirect to='/'/>}
            {data?
            <>
            <div style={{paddingBottom:20,paddingTop:100, paddingInline:20}}>
                <BackButton/> 
            </div>
            <div className={classes.adversaryContent}>
                <div style={{backgroundColor:theme.colors.lightDark}} className={classes.adversaryBlock}>
                    <div style={{textAlign:'center'}}>
                    <text style={{fontWeight:'bold',color:theme.colors.whiteoff,fontSize:22}}>{data?.primary_name}</text>
                    </div>
                    <div className={classes.topContent}>
                        <div>
                            <text style={{color:'gray',fontWeight:'bold',fontSize:16,paddingTop:8}}>Names</text>
                            <div style={{display:'flex',flexDirection:'column',borderRadius:10,backgroundColor:theme.colors.footer}}>
                                {data?.aliases.map((data,index)=>{
                                    return <text key={index} style={{paddingBlock:8,paddingInline:18,color:theme.colors.whiteoff,fontSize:14}}>{data}</text>
                                })}
                            </div>
                        </div>
                        <div>
                            <text style={{color:'gray',fontWeight:'bold',fontSize:15}}>Country of Origin</text><br/>
                            <text style={{fontWeight:'bold',color:theme.colors.whiteoff,fontSize:20}}>{data?.country_of_origin}</text><br/><br/>
                            <text style={{color:'gray',fontWeight:'bold',fontSize:15}}>Sponsor</text><br/>
                            <div style={{marginTop:3,width:'100%',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                                {data?.sponsors.map((data,index)=>{
                                    return <text key={index} className={classes.sponsor}>{data}</text>
                                })}
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop:20}}>
                        <text style={{color:'gray',fontWeight:'bold',fontSize:15}}>Tools Used</text><br/>
                        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                            {data?.tools_used.map((data,index)=>{
                                return <div key={index} className={classes.tools}>{data}</div>
                            })}
                        </div>
                    </div><br/>
                    <text style={{color:'gray',fontWeight:'bold',fontSize:15}}>Observed</text><br/>
                    <div className={classes.observerd}>
                        <div>
                            <text style={{fontSize:18,color:'gray'}}>Target Sectors</text><br/>
                            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',width:'100%'}}>
                                {data?.target_sectors.map((data,index)=>{return <text key={index} className={classes.observerdSector}>{data}</text>})} 
                            </div>
                            <div style={{marginTop:15}}>
                                <text style={{color:'gray',fontWeight:'bold',fontSize:15}}>Active</text><br/>
                                <div style={{marginTop:10}}>
                                    <text style={{color:theme.colors.whiteoff,borderRadius:3,backgroundColor:theme.colors.footer,paddingInline:20,paddingBlock:5}}>{data.is_active? 'YES':'NO'}</text>
                                </div>
                            </div>
                        </div>
                        <div>
                            <text style={{fontSize:18,color:'gray'}}>Target Countries</text><br/>
                            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',width:'100%'}}>
                                {data?.target_countries.map((data,index)=>{return <text key={index} className={classes.observerdCountry}>{data}</text>})} 
                            </div>
                            <div style={{marginTop:15,width:'100%'}}>
                                <text style={{color:'gray',fontWeight:'bold',fontSize:15}}>Created At</text><br/>
                                <text style={{color:theme.colors.whiteoff,fontSize:18}}>{(new Date(data.created_at).toDateString())}</text>
                            </div>
                            <div style={{marginTop:15,width:'100%'}}>
                                <text style={{color:'gray',fontWeight:'bold',fontSize:15}}>Last Modified at</text><br/>
                                <text style={{color:theme.colors.whiteoff,fontSize:18}}>{(new Date(data.last_modified).toDateString())}</text>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:theme.colors.lightDark}} className={classes.adversaryBlock}>
                    <div>
                        <text style={{color:'gray',fontWeight:'bold',fontSize:18}}>Motivation</text><br/>
                        <text style={{color:theme.colors.whiteoff,fontSize:15}}>{data?.motivation}</text>
                    </div>
                    <div  style={{marginTop:30}}>
                        <text style={{color:'gray',fontWeight:'bold',fontSize:18}}>Description</text><br/>
                        <text style={{color:theme.colors.whiteoff,fontSize:15}}>{data?.description}</text>
                    </div>
                    {operations.length?
                        <div  style={{marginTop:20}}>
                            <text style={{color:'gray',fontWeight:'bold',fontSize:18}}>Operation Performed</text><br/>
                            <>
                                {operations.map((data,index)=>{
                                    return(
                                        <div key={index} className={classes.operation}>
                                            <div style={{display:'flex',flexDirection:'row',marginBottom:4,justifyContent:'space-between'}}>
                                                <text style={{color:'gray',fontWeight:'bold',fontSize:15}}>{data.key}</text>
                                                <MdOutlineContentCopy size={18} color='white'/>
                                            </div>
                                            <text style={{color:'rgba(255,255,255,0.7)',fontSize:14}}>{data.op}</text>
                                        </div>
                                    )
                                })}
                            </>
                        </div>
                    :null}
                    <div style={{marginTop:20}}>
                        <text style={{color:'gray',fontWeight:'bold',fontSize:18}}>Refernces</text><br/>
                        <text style={{color:theme.colors.whiteoff,fontSize:15}}>{data?.refernces}</text>
                    </div>
                    <div style={{marginTop:20}}>
                        <text style={{color:'gray',fontWeight:'bold',fontSize:18}}>Further Information</text><br/>
                        <>
                          {data.further_information.length?
                             <div>
                                 {data.further_information.map((data,index)=>{
                                     return <><text key={index} style={{color:theme.colors.whiteoff,fontSize:15}}>{data}</text><br/></>
                                 })}
                             </div>
                          :null}
                        </>
                    </div>
                </div>
                
            </div>
            </>
            : 
            <Loader size={50}/>
            }
        </div>
    )
}

export default Adversary