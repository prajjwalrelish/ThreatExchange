import React,{useContext, useState, useEffect} from 'react'
import * as Api from '../api'
import Cookies from 'js-cookie'
import {useHistory} from 'react-router-dom'
export const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [refreshToken, setRefreshToken] = useState(null)
    const [accessToken, setAccessToken] = useState(null)
    const[loading,setLoading] = useState(true)

    let refreshTime = 5*60*1000

    useEffect(()=>{
      resolveAuth()
      const rt = setInterval(async()=>{
        await RefreshToken()
      }, refreshTime)
      return () =>{clearInterval(rt)}
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const resolveAuth = async () =>{
      if(Cookies.get('refresh')){
         setRefreshToken(Cookies.get('refresh'))
         console.log('refreshing Token')
         const refresh = await Api.RefreshToken(Cookies.get('refresh'))
         if(refresh.status===200){
          const access = refresh.data.access
          setAccessToken(access)
          Cookies.set('access',access)
         }
         else{
           logout()
         }
         setLoading(false)
      }
      else{
        setLoading(false)
      }
    }

    const RefreshToken = async()=>{
      if(Cookies.get('refresh')){
        const refresh = await Api.RefreshToken(Cookies.get('refresh'))
        if(refresh.status===200){
          const access = refresh.data.access
          setAccessToken(access)
          Cookies.set('access',access)
        }
        else{
           logout()
        }
      }
    }

    const login = async (body) =>{
      console.log('logging...')
      const result  = await Api.Login(body)
      if(result.status===200){
        const access = result.data.tokens.access
        const refresh = result.data.tokens.refresh
        setAccessToken(access)
        Cookies.set('access',access)
        console.log("cookies login ",Cookies.get('access'))
        setRefreshToken(refresh)
        Cookies.set('refresh',refresh)
        setUser({email:result.data.email, username:result.data.username})
      }
      return result
    }

    const register = async (body) =>{
      console.log('Registering...')
      const result = await Api.SignUp(body)
      return result
    }

    const refresh = async () =>{
      const result = await Api.RefreshToken({refreshToken})
      if(result.status===200){
        let access = result.data['access']
        setAccessToken(access)
        return access
      }
      else{
        logout()
      }
    }
    
    const forgetPassword = async({email}) =>{
      const result = await Api.ForgetPassword({email})
      if(result.status===200){
        return true
      }
      return false
    }
   
   

    const logout = async() =>{
      const result = await Api.Logout(refreshToken)

      console.log("resulllttt ",result)
      if(result.status===204){
      console.log("logged out")
      Cookies.remove('refresh')
      Cookies.remove('access')
      console.log("cookies logout ",Cookies.get('access'))

      setRefreshToken(null)
      setAccessToken(null)
      }
    }
    
    const value = {
      refreshToken,
      accessToken,
      user, 
      loading, 
      setAccessToken,
      setRefreshToken,
      login,
      register,
      forgetPassword,
      logout,
      refresh
    }
    
    return (
       <AuthContext.Provider value={value}>
         {!loading && children}
       </AuthContext.Provider>
    )
}