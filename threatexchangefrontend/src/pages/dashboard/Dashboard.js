import React, { useContext } from 'react'
import theme from '../../theme'
import classes from './Dashboard.module.css'
import { Header, Sidebar } from '../../components'
import { AuthContext } from '../../contexts'
import { Redirect, useLocation, Route } from 'react-router-dom'
import Adversaries from './Adversaries'
import Vulnerabilities from './Vulnerabilities'
import {Activities, Reports, Categories, AptGroup, Ioc} from '..'

const Dashboard = () =>{
    const {refreshToken} = useContext(AuthContext)
    const currLink = useLocation().pathname
    
    return(
        <div>
            {/* {!refreshToken? <Redirect to='/'/> : null} */}
            <Header/>
            <div style={{backgroundColor:theme.colors.dark}} className={classes.dashboard}>
                <Sidebar/>
                <div style={{width:'100%'}}>
                    <Route path={'/dashboard/activities'} component={Activities}/>
                    <Route path={'/dashboard/adversaries'} component={Adversaries}/>
                    <Route path={'/dashboard/ioc/:list?/:uuid?'} component={Ioc}/>
                    <Route path={'/dashboard/vulnerabilities'} component={Vulnerabilities}/>
                    <Route path={'/dashboard/reports'} component={Reports}/>
                    <Route path={'/dashboard/categories'} component={Categories}/>
                    <Route path={'/dashboard/apt'} component={AptGroup}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard