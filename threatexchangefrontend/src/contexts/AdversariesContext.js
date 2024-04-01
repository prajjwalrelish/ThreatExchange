import React,{useContext, useEffect, useState} from 'react'
import * as Api from '../api'
import {AuthContext} from '.'

export const AdversariesContext = React.createContext()

export function useAdversaries(){
    return useContext(AdversariesContext)
}

export function AdversariesProvider({children}) {
  const {refreshToken} = useContext(AuthContext)
  const [advItems, setAdvItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    if(refreshToken){
      getAllCards()
    }
  },[refreshToken])

  const getAllCards = async() =>{
    setLoading(true)
    const result = await Api.GetCards()
    if(result.status===200){
      setAdvItems(result.data.results)
    }
    setLoading(false)
  }
  
  const value={
    loading,
    advItems
  }
    return (
       <AdversariesContext.Provider value={value}>
         {children}
       </AdversariesContext.Provider>
    )
}