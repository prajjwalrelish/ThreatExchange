import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie'
import theme from '../../theme'
import {Header, AccountHeader} from '../../components'
import {Route,Redirect,useLocation} from 'react-router-dom'
import Profile from './Profile'
import Subscriptions from './Subscriptions'
import Notification from './Notification'
import Tags from './Tags'
import { GetUser } from '../../api'

const Account = () =>{
    const currLink = useLocation().pathname
    const [email, setEmail] = useState('')

    useEffect( () => {
        const fetchData = async () => {
            const userInfo = jwt_decode( Cookies.get('access') ) 
            const { data } = await GetUser(userInfo.user_id);
            setEmail(data.email)
        }
        fetchData()
    })
    return(
        <div style={{backgroundColor:theme.colors.dark,minHeight:'100vh'}}>
            {currLink==='/account'? <Redirect to='/account/subscriptions'/>:null}
            <Header/>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center",paddingTop:120,paddingBottom:40}}>
                <div style={{backgroundColor:theme.colors.footer,width:100,height:100,borderRadius:'50%',display:'flex',textAlign:'center',justifyContent:'center',alignItems:'center'}}>
                   <text style={{color:'gray',fontWeight:'bold',fontSize:30}}>{email !== undefined && email.charAt(0).toUpperCase()}</text>
                </div>
                <br/>
                {/* <text style={theme.textVariants.hero}>Amar Preet Singh</text> */}
                <text style={{color:theme.colors.gray,marginTop:5}}>Signed in as: {email}</text>
            </div>
            <AccountHeader/>
            <div style={{backgroundColor:theme.colors.lightDark,minHeight:'54vh'}}>
              <Route path={'/account/profile'} component={() => <Profile email={email}/>} exact/>
              <Route path={'/account/subscriptions'} component={Subscriptions} exact/>
              <Route path={'/account/notifications'} component={Notification} exact/>
              <Route path={'/account/tags'} component={Tags} exact/>
            </div>
        </div>
    )
}
export default Account