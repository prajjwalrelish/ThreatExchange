import React, { useState, useContext, useEffect } from 'react'
import theme from '../../theme'
// import classes from '../../styles/Dashboard.module.css'
import classes from '../Account/Account.module.css'
import {AptGroup as ApG} from '../../utils/data'
import { Paginate, Loader, Col } from '../../components'
import styles from './AptGroup.module.css'
import {DataContext} from '../../contexts'
import { useHistory, useLocation } from 'react-router-dom'
import dashClasses from '../../styles/Dashboard.module.css'
import { GetSubVendors } from '../../api/Cve.api'
import { GetCount, GetVendors, VendorSub } from '../../api'
import VendorSubscription from '../Account/VendorSubscription'
import ProductSubscription from '../Account/ProductSubscription'

const AptGroup = () =>{
    // const {fetchVendors,vendors} = useContext(DataContext)
    const history = useHistory()
    const location = useLocation()
    let q = new URLSearchParams(window.location.search);
    let page = q.get('page')
    let s = q.get('search')
    let l = q.get('letter')
    // const [currPage,setCurrPage] = useState(Number(page) && Number(page)>0? Number(page):1)
    const [search, setSearch] = useState(s? s: '')
    const [letter, setLetter] = useState(l? l:'')
    const [subVendors, setSubVendors] = useState(null)
    const [subscribedVendors, setSubscribedVendors] = useState([])

    // useEffect(()=>{
    //     const query = new URLSearchParams(location.search)
    //     if(!location.search || !Number(page) || Number(page)<1){
    //         const p = query.get('page')
    //         if(p){
    //             query.set('page','1')
    //         }
    //         else{
    //             query.append('page','1')
    //         }
    //         history.push({search:query.toString()})
    //     }
    //     getSubVendors()
    // },[])

    // const getSubVendors = async() =>{
    //     const result = await GetSubVendors()
    //     if(result.status===200 && result.data.vendors_list.length){
    //         setSubVendors(result.data.vendors_list)
    //     }
    // }

    // useEffect(()=>{
    //     fetchVendors({page:currPage,search:search,letter:letter})
    // },[location.search])

    // const changePage = async(page) =>{
    //     setCurrPage(page)
    //     let query = new URLSearchParams(location.search)
    //     query.set('page',String(page))
    //     history.push({search:query.toString()})
    // }

    // const searchData = (e) =>{
    //     e.preventDefault()
    //     let query = new URLSearchParams(location.search)
    //     query.set('search',search)
    //     query.set('page','1')
    //     setCurrPage(1)
    //     history.push({search:query.toString()})
    // }

    // const changeletter = (l) =>{
    //     setLetter(l)
    //     let query = new URLSearchParams(location.search)
    //     query.set('letter',l)
    //     query.set('page','1')
    //     setCurrPage(1)
    //     history.push({search:query.toString()})
    // }

    const [vendors, setVendors] = useState(null)
    // const [subscribeStatus, setSubscribeStatus] = useState("Subscribe")
    // const [itemClicked,setItemClicked] = useState(null)
    const [currPage,setCurrPage] = useState(1)
    const [vendorCount, setVendorCount] = useState(0)
    const [productCount, setProductCount] = useState(0)

    useEffect( () => {
        const fetchData = async () => {
            const { data } = await GetSubVendors()
            if(data.vendors)
                setSubscribedVendors(data.vendors)
            
        }
        fetchData()
    },[currPage])

    useEffect(()=>{
        const getVendorsList = async() =>{
        const response = await GetVendors(currPage)
        if(response?.status===200){
            setVendors(response.data)
        }
        const response1 = await GetCount()
        if(response1?.status===200){
            setVendorCount( Math.ceil(response1.data.vendor / 20) );
            setProductCount( Math.ceil(response1.data.product / 20) );            
        }
    }
    getVendorsList()
    },[currPage])

    const changePage = async(page) =>{
        setCurrPage(page)
    }

    const handleClick = async (uuid,subscribeStatus) => {
        const body = {"vendor":uuid}
        subscribeStatus === "subscribe" ? await VendorSub(body,"unsubscribe") : await VendorSub(body,"subscribe")
        window.location.reload(true);
        // setCurrPage(currPage)
        // subscribeStatus === "Subscribe" ?  setSubscribeStatus("Unsubscribe") : setSubscribeStatus("Subscribe")
        // location.reload();
        // setItemClicked(uuid)
    }

    return (
        <div className={classes.subscriptions}>
            
        <VendorSubscription 
            data={vendors} 
            // subscribeStatus={subscribeStatus}
            currPage={currPage}
            count={vendorCount}
            // itemClicked={itemClicked}
            changePage={changePage}
            handleClick={handleClick}
            subscribedVendors={subscribedVendors}
            accountSubscription = {false}
        /> 

        <ProductSubscription 
            data={vendors} 
            // subscribeStatus={subscribeStatus}
            currPage={currPage}
            count={productCount}
            // itemClicked={itemClicked}
            changePage={changePage}
            handleClick={handleClick}
            subscribedVendors={subscribedVendors}
            accountSubscription = {false}
        /> 
        
        {/* <div className={classes.border}>
                <text className={classes.header}  style={{backgroundColor:theme.colors.footer}}>My Products</text>
                <div style={{padding:12}}>
                <text style={theme.textVariants.para}>You have not Created Any Product yet, Click Here to see all the vendors list</text>
                </div>
            </div> */}
        </div>
    )

    // return(
    //     <div className={styles.aptGroupPage} style={{paddingInline:20,paddingTop:20,display:'flex'}}>
    //         <div className={styles.left}>
    //             <text style={{fontSize:20,color:theme.colors.whiteoff}}>Advanced Persistent Threat (APT) Groups</text>
    //             <div className={`${classes.border} ${styles.overflowBox}`} style={{width:'100%'}}>
    //                 <div style={{borderBottom:`1px solid ${theme.colors.whiteoff}`,width:'100%',paddingBottom:9}}>
    //                     <text style={{color:'white',fontSize:16}}>APT Groups (4)</text>    
    //                 </div>
    //                     {vendors===null?
    //                     <div style={{paddingBlock:30}}><Loader size={30}/></div>
    //                     :
    //                     <table style={{width:'100%',textAlignLast:'left',color:theme.colors.whiteoff,wordBreak:'break-all',textAlign:'center'}}>
    //                         <tr>
    //                             <th style={{borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10}}>Group</th>
    //                             <th style={{borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10}}>Attacks</th>
    //                             <th style={{minwidth:'180px',borderBottom:`solid 1px ${theme.colors.whiteoff}`,paddingBlock:5,paddingBottom:10}}>Subscription</th>
    //                         </tr>
    //                         <>{vendors.length?
    //                             <>
    //                             {vendors.map((data,index)=>{
    //                                 return(
    //                                     <>
    //                                         <tr className={`${styles.row} ${index%2==0? styles.even:null} `}>
    //                                             <Col.AptCol data={data} subVendors={subVendors} setSubVendors={()=>getSubVendors()}/>
    //                                         </tr>
    //                                     </>
    //                                 )
    //                             })}
    //                             </>
    //                             :
    //                             <div><h6 style={{color:'white'}}>No Groups Fount !</h6></div>
    //                         }
    //                         </>
    //                     </table>
    //                 }
    //                 <div style={{display:'flex'}}>
    //                     {vendors?.length?
    //                     <Paginate currPage={currPage} setPage={(v)=>changePage(v)}/>
    //                     :null}
    //                 </div>
    //             </div>
    //         </div>
    //         {/* <div className={`${classes.border} ${styles.right}`}>
    //             <div style={{borderBottom:`1px solid ${theme.colors.whiteoff}`,width:'100%',paddingBottom:9}}>
    //                 <text style={{color:theme.colors.whiteoff,fontSize:16}}>Search</text>    
    //             </div>
    //             <form onSubmit={(e)=>searchData(e)} style={{marginTop:10,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    //                 <input
    //                     className={dashClasses.dashInput}
    //                     value={search} 
    //                     style={{width:'73%'}}
    //                     onChange={(e)=>setSearch(e.target.value)}
    //                     placeholder='Search here'
    //                 />
    //                 <button
    //                     className={dashClasses.dashButton}
    //                     type='submit'>Search</button>
    //             </form>
    //             <div style={{marginTop:10}}>
    //                 <text style={{color:theme.colors.whiteoff,fontSize:16}}>Filter By</text>
    //                 <div style={{display:'flex',flexWrap:'wrap',marginBlock:10}}>
    //                     {filterBy.map((data,index)=>{
    //                         let b = letter===data
    //                         return(
    //                             <div onClick={()=>{return letter===data? null : changeletter(data)}} style={{backgroundColor:b? theme.colors.dark:null}} key={index} className={styles.filterBox}>{data}</div>
    //                         )
    //                     })}
    //                 </div>
    //             </div>
    //         </div> */}
    //     </div>
    // )
}

// const filterBy = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','@','0','1','2','3','4','5','6','7','8','9']
export default AptGroup