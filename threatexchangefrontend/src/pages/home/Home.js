import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomeFooter, Header } from '../../components'
import theme from '../../theme'
import {AboutUs,Landing,PrivacyPolicy,Blog,CokiePolicy, Page404} from '..'
import { useLocation } from 'react-router-dom'

export default function Home() {
    const currLink = useLocation().pathname
    const baseLink = currLink.split('/')[1]
    return (
        <div style={{backgroundColor:theme.colors.dark}}>
            <Header/>
            <div style={{paddingTop:80}}>
              <Switch>
                <Route path={`/${baseLink}`} component={Landing} exact/>
                <Route path={`/${baseLink}/about`} component={AboutUs} exact/>
                <Route path={`/${baseLink}/blog`} component={Blog} exact/>
                <Route path={`/${baseLink}/privacy-policy`} component={PrivacyPolicy} exact/>
                <Route path={`/${baseLink}/cookie-policy`} component={CokiePolicy} exact/>
                <Route path={'/home/'} component={Page404} />
              </Switch>
            </div>
            <HomeFooter/>
        </div>
    )
}
