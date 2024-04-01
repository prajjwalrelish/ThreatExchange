import axios from "axios";
// import Cookies from "js-cookie";

const baseURL = process.env.REACT_APP_API_URL
// const baseURL = 'https://103.138.189.99/'
export const Api = axios.create({
    baseURL:baseURL,
    timeout:5000,
    headers:{
        'Content-Type': 'application/json',
        accept : 'application/json',
    },
})

export {Login,SignUp,RefreshToken,VerifyEmail,Logout, ForgetPassword,PasswordReset, CheckEmail, ContactUS, GetUser} from './auth.api'
export {GetCards,GetCard} from './Cards.api'
export {GetCount, GetIocList, GetIocById, GetFilteredIocs, GetIocDetails} from './Ioc.api';
export {GetCves, GetCwes, GetVendors, GetSubVendors, VendorSub, GetVendorById} from './Cve.api'