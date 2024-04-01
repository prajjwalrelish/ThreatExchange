import React,{useEffect} from 'react'
import classes from './Home.module.css'
import theme from '../../theme'
import ParticlesBg from 'particles-bg'
import Aos from 'aos';

export default function CokiePolicy() {
    useEffect(() => {
        window.scrollTo(0,0)
        Aos.init({duration:800,once:true,anchorPlacement:'bottom-bottom'})
     }, [])
 
    return (
        <div>
                <ParticlesBg color='#ffffff' 
                    bg={{
                        position: "absolute",
                        width: '100%',
                        height:'35vh',
                        }} 
                    num={50}
                    type='cobweb'
                />
            <div className={classes.policyHeader}>
                <text style={theme.textVariants.header}>PRIVACY POLICY</text>
                <text style={theme.textVariants.subTitle}>(Effective Date: 25/08/2021)</text>
            </div>
            <div  className={classes.policyContent}>
                <div className={classes.indexes}>
                    <div data-aos="fade-up" className={classes.border}>
                        <ul>
                            <li>
                                <a href="#intro">Introduction</a>
                            </li>
                            <li>
                                <a href="#what-coo">What are cookies?</a>
                            </li>
                            <li>
                                <a href="#what-coo-do">What cookies do we use and why?</a>
                            </li>
                            <li>
                                <a href="#how-do-we">How do we use cookies?</a>
                            </li>
                            <li>
                                <a href="#man-cook">Managing cookies</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div data-aos="fade-up" id='intro' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>Introduction:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        This Cookie Policy (the "Cookie Policy") is a part of our Privacy Policy and explains the different types of cookies being used on our website "https://www.threatexchange.io" (the "website") along with their purpose. Terms mentioned herein carry the same meaning as explained in our <a className={classes.link} href="./privacypolicy.html">Privacy Policy</a>
                        </text>
                    </div>
                    <div data-aos="fade-up" id='what-coo' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>What are cookies?</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        Cookies are small bits of code that are used to identify your devices when you use and interact with our website and related services. They are often used for remembering your preferences, collecting aggregated analytics information and to remember you're logged in, in case you do.
                        <br/>
                        <br/>
                        It may also be used for analytics purposes, such as, generating analytics regarding website visits, how the website is used, visitor's device and behavior etc.
                        <br/>
                        <br/>
                        In order to place cookies on your browser or device, we provide a clear notice in the form of a cookie banner on the website that tells you that our website uses cookies and asks for your confirmation before placing the cookies. Please note that if you choose to continue browsing the website and close the banner without accepting the cookies, we interpret this action as your acceptance of our cookies and treat it as per our Cookie and <a className={classes.link}  href="./privacypolicy.html">Privacy Policy</a>.
                        </text>
                    </div>
                    <div data-aos="fade-up" id='what-coo-do' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>What cookies do we use and why?</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        We use 3rd party analytics cookies in our website. Cookies set by the third-party partners and service providers are called 3rd party cookies. 
                        <br/><br/>
                        Analytics cookies allow us to analyze how you access and use our website in order to make our services more useful and relevant to you. 
                        <br/><br/>
                        These cookies collect information about your use of our website and enable us to improve the way the website works. For example, analytics cookies show us which are the most frequently visited pages on our website. They help us record how you interact with our website, such as how you navigate around pages and from page to page, identifying improvements we can make to the visitors journey. They also help identify any difficulties you have accessing our services, so we can fix any problems. Additionally, these cookies allow us to see overall patterns of usage at an aggregated level.
                        <br/><br/>
                        We use analytics cookies from Google to help us achieve this purpose. When you visit our website and access any pages using services from Google, these websites set the cookies in your browser or device.
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='how-do-we' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>How do we use cookies?</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        We use analytics services from Google in our website to obtain the following aggregated analytics information in line with our <a  className={classes.link}  href="./privacypolicy.html">Privacy Policy</a>. As a result, Google set analytics cookies as a part of their services that we avail to obtain the following aggregated analytics information.
                        <br/><br/>
                        <ul>
                            <li>
                                To generate statistical data on how the users use the website.
                            </li>
                            <li>
                                To throttle request rate.
                            </li>
                            <li>
                                To generate statistical data on how the users use the website.
                            </li>
                            <li>
                                To know the visitor's device and behavior to know the user across multiple devices. 
                            </li>
                            <li>
                                To receive information based on users geographical GPS location.
                            </li>
                        </ul>
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='man-cook' style={{marginTop:'80px',paddingBottom:'80px'}}>
                        <text style={theme.textVariants.subHeading}>Managing cookies:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        When you visit our website, you'll see notice about the use of cookies by us. By using our website, you understand that cookies are used and acknowledge that by continuing to use the site, you consent to their placement in your browser and devices.
                        <br/><br/>
                        Most modern browsers are set to accept cookies by default but you can change your settings to notify you when a cookie is being set or updated. You also have the choice to opt-out by making settings in your browser to block cookies altogether.
                        <br/><br/>
                        Please consult your browser's documentation to understand how to block cookies and prevent websites from setting them in your browser. You can also delete the cookies that are already on your computer and you can set most browsers to prevent them from being placed. 
                        </text>
                    </div>
                </div>
            </div>
        </div>
    )
}
