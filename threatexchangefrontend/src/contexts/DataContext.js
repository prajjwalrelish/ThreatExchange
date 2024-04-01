import React,{ useState, useContext, useEffect, createContext } from 'react'
import { GetCwes, GetVendors, GetReports, GetCves } from '../api/Cve.api'
// import { GetCwes } from '../api/Cve.api'
export const DataContext = createContext()

export const DataProvider = ({children}) =>{
    const [cves, setCves] = useState(null)
    const [cwes, setCwes] = useState(null)
    const [vendors, setVendors] = useState(null)
    const [reports, setReports] = useState(null)

    const fetchCves = async(body) =>{
        const result = await GetCves(body)
        if(result.status===200){
            setCves(result.data)
        }
    }

    const fetchCwes = async(body) =>{
        const result = await GetCwes(body)
        if(result.status===200){
            setCwes(result.data)
        }
    }

    const fetchVendors = async(body) =>{
        const result = await GetVendors(body)
        if(result.status==200){
            setVendors(result.data)
        }
    }

    const fetchReports = async(body) =>{
        const result = await GetReports(body)
        if(result.status===200){
            setReports(result.data)
        }
    }

    const value = {
        cves,
        cwes,
        vendors,
        reports,
        fetchCves,
        fetchCwes,
        fetchVendors,
        fetchReports
    }

    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}