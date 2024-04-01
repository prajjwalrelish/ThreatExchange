import React,{useState,useContext,useEffect} from 'react'
import theme from '../../theme'
import classes from '../../styles/Dashboard.module.css'
import style from '../apt/AptGroup.module.css'
import { Loader } from '../../components'
import {DataContext} from '../../contexts'

const Reports = () =>{
    const {fetchReports,reports} = useContext(DataContext)
    const [currPage,setCurrPage] = useState(1)

    useEffect(()=>{
        fetchReports({page:currPage})
    },[currPage])

    return(
        <div style={{paddingInline:20,paddingTop:20}}>
            <text style={{fontSize:20,color:theme.colors.whiteoff}}>Reports</text>
            <div className={classes.border} style={{maxWidth:'1000px'}}>
                {reports==null?
                    <div><Loader size={30}/></div>
                    :
                    <>
                    {reports.length?
                        <table style={{width:'100%',textAlignLast:'left',color:theme.colors.whiteoff,wordBreak:'break-all',textAlign:'center',fontSize:14}}>
                            {reports.map((data,index)=>{
                                return (
                                    <tr>
                                        <th style={{borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10}}>Date</th>
                                        <th style={{borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10}}>Alerts</th>
                                        <th style={{borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10}}>APT Groups</th>
                                    </tr>
                                )}
                            )}
                        </table>
                    :<div><h6 style={{color:'white',fontSize:15}}>No reports found !</h6></div>}
                    </>
                }
            </div>
        </div>
    )
}

export default Reports