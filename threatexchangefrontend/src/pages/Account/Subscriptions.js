import React, { useEffect, useState } from 'react'
import classes from './Account.module.css'
import { GetVendors} from '../../api/Cve.api'
import theme from '../../theme'
import { GetCount, VendorSub, GetSubVendors, GetVendorById } from '../../api'
import VendorSubscription from './VendorSubscription'
import ProductSubscription from './ProductSubscription'
export default function Subscriptions() {
    // const [vendors, setVendors] = useState([])
    // const [subscribeStatus, setSubscribeStatus] = useState("Subscribe")
    // const [itemClicked,setItemClicked] = useState(null)
    const [currPage,setCurrPage] = useState(1)
    const [vendorCount, setVendorCount] = useState(0)
    const [productCount, setProductCount] = useState(0)
    const [subscribedVendors, setSubscribedVendors] = useState([])
    const [subscribedVendorsID, setSubscribedVendorsID] = useState([])

    // useEffect(()=>{
    //     const getVendorsList = async() =>{
    //     const response = await GetVendors(currPage)
    //     if(response?.status===200){
    //         setVendors(response.data)
    //     }
    //     const response1 = await GetCount()
    //     if(response1?.status===200){
    //         setVendorCount( Math.ceil(response1.data.vendor / 20) );
    //         setProductCount( Math.ceil(response1.data.product / 20) );            
    //     }
    // }
    // getVendorsList()
    // },[currPage])

    const changePage = async(page) =>{
        setCurrPage(page)
    }

    const handleClick = async (uuid,subscribeStatus) => {
        const body = {"vendor":uuid}
        subscribeStatus === "subscribe" ? await VendorSub(body,"unsubscribe") : await VendorSub(body,"subscribe")
        window.location.reload(true);
    }

    const hhhh = async (item) => {
        const { data } = await GetVendorById(item)
        return {uuid:item,name:data.name}
    }
   

    useEffect( () => {
        
        const fetchData = async () => {
            const { data } = await GetSubVendors()
            console.log("vendors id ",data.vendors)
            if(data.vendors){
                const subscribedVendors = await Promise.all(
                    data.vendors.map(async (item) => {
                      const response = await GetVendorById(item);
                    return {uuid:item,name:await response.data.name}
                    })
                  );
                setSubscribedVendorsID(data.vendors)
                setSubscribedVendors(subscribedVendors)
                setVendorCount( Math.ceil(data.vendors.length / 20) );
            }    
        }

        fetchData()
    },[currPage])

    return (
        <div className={classes.subscriptions}>
            
            
         <VendorSubscription 
            data={subscribedVendors} 
            // subscribeStatus={subscribeStatus}
            currPage={currPage}
            count={vendorCount}
            // itemClicked={itemClicked}
            changePage={changePage}
            handleClick={handleClick}
            subscribedVendors={subscribedVendorsID}
            accountSubscription = {true}
        /> 

       {/* <ProductSubscription 
            data={vendors} 
            subscribeStatus={subscribeStatus}
            currPage={currPage}
            count={productCount}
            itemClicked={itemClicked}
            changePage={changePage}
            handleClick={handleClick}
            
        />  */}
        
        {/* <div className={classes.border}>
                <text className={classes.header}  style={{backgroundColor:theme.colors.footer}}>My Products</text>
                <div style={{padding:12}}>
                <text style={theme.textVariants.para}>You have not Created Any Product yet, Click Here to see all the vendors list</text>
                </div>
            </div> */}
        </div>
    )
}

const data = [
    {
        id:0,
        text:'BuyThatFits-120',
        sub:true
    },
    {
        id:1,
        text:'BuyThatFits-145',
        sub:true
    },
    {
        id:2,
        text:'BuyThat-120',
        sub:true
    },
    {
        id:3,
        text:'BuyFits-120',
        sub:true
    },
    {
        id:4,
        text:'BuyThat456-120',
        sub:true
    },
    {
        id:5,
        text:'BuyThat56456s-120',
        sub:true
    },
]