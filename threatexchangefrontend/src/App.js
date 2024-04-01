import React from 'react'
import * as Routes from './Routes'
import {Route,Redirect,useLocation, Switch} from 'react-router-dom'
import {Home,Login,Register,VerifyEmail, ForgetPassword, Resetpassword,Dashboard, Contact ,Account, Adversary, Vulnerability, Page404} from './pages'
import ProtectedRoute from './pages/Auth/ProtectedRoute';

const App = () => {
  const currLink = useLocation().pathname
  return (
    <Switch>
      <Route path={'/home'} component={Home} />
      <ProtectedRoute path={'/account'} component={Account} />
      <Route path={'/login'} component={Login} exact/>
      <Route path={'/register'} component={Register} exact/>
      <Route path={'/forget-password'} component={ForgetPassword} exact/>
      <Route path={'/message'} component={VerifyEmail} exact/>
      <Route path={'/reset-password'} component={Resetpassword} exact/>
      <ProtectedRoute path={'/dashboard'} component={Dashboard} />
      <Route path='/contact' component={Contact} exact/>
      <ProtectedRoute path='/Adversary/:id' component={Adversary} exact/>
      <ProtectedRoute path='/vulnerability/:id' component={Vulnerability} exact/>
      <Route path={'/not-found'} component={Page404} exact/>
      <Route path='/' component={RedirectPage} />
    </Switch>
  );
}

const RedirectPage = () =>{
  return(
    <Redirect to={'/home'}/>
  )
}

export default App;
