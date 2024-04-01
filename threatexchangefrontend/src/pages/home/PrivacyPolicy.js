import React,{useEffect} from 'react'
import classes from './Home.module.css'
import theme from '../../theme'
import ParticlesBg from 'particles-bg'
import Aos from 'aos';
export default function PrivacyPolicy() {

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
                                <a href="#data-controller">Data Controller</a>
                            </li>
                            <li>
                                <a href="#third-party">Third party links and services</a>
                            </li>
                            <li>
                                <a href="#per-info-we-coll">Personal Information we may collect</a>
                            </li>
                            <li>
                                <a href="#per-info-we-not-coll">Personal Information we do not collect</a>
                            </li>
                            <li>
                                <a href="#how-we">How we may collect Personal Information</a>
                            </li>
                        </ul>
                    </div>
                    <div data-aos="fade-up" className={classes.border}>
                        <ul>
                            <li>
                                <a href="#how-we-per-info">How we may use Personal Information</a>
                            </li>
                            <li>
                                <a href="#how-per-info">How Personal Information may be disclosed</a>
                            </li>
                            <li>
                                <a href="#how-you">How you can access, change, or suppress your Personal Information</a>
                            </li>
                            <li>
                                <a href="#gen-info">General Information we may collect</a>
                            </li>
                            <li>
                            <a href="#how-we-coll-gen-info">How we may collect General Information</a>
                            </li>
                        </ul>
                    </div>
                    <div data-aos="fade-up" className={classes.border}>
                        <ul>
                            <li>
                                <a href="#how-we-dis-gen-info">How we may use and disclose General Information</a>
                            </li>
                            <li>
                                <a href="security">Security</a>
                            </li>
                            <li>
                                <a href="#data-transfer">Data transfer beyond geographical boundaries</a>
                            </li>
                            <li>
                                <a href="#ret-per">Retention Period</a>
                            </li>
                            <li>
                                <a href="#update">Updates to this Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#contact">Contact Us</a>
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
                            Threat Exchange ("TE", "we", "us", or "our"), values your trust and wants you to be familiar with how we collect, use, and disclose information related to you. 
                            This Privacy Policy describes our practices in connection with information that we collect 
                            when you visit our website, "https://www.threatexchange.io" (the "website") regardless of the device used to 
                            access the website, including, not limited to, desktop, mobile phones, tablets etc.
                        <br/><br/>
                           By visiting the website, you are agreeing to the terms and conditions of this Privacy Policy.
                        <br/><br/>
                            This Privacy policy (this Policy) explains what we collect, how we collect and use, share, 
                            disclose or otherwise process personal and general information we collect from you.
                        <br/><br/>It is important that you read this Privacy Policy so that you are aware of your privacy rights and know your entitlements under the law.
                        </text>
                    </div>
                    <div data-aos="fade-up" id='data-controller' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>Data Controller:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        Threat Exchange is the controller and responsible for your personal data you share with us on the website.
                        <br/><br/>
                        If you have any questions regarding our privacy policy or if you want to exercise your privacy rights under the law, please contact us using the details in <a className={classes.link} href="./contactus.html">Contact Us</a> section.
                        </text>
                    </div>
                    <div data-aos="fade-up" id='third-party' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>Third party links and services:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                            Our website uses several third party links/services, plug-ins and applications. This Privacy Policy does not address, and we are not responsible for, the privacy, information collection, or other practices of any third party websites. Accordingly, clicking on those links may allow third-party websites to collect and share information about you. We are not liable for any information collected by such third party websites that you visit through redirection from our website and the information you share on such websites. The inclusion of a link on the website does not imply endorsement of the linked site.
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='per-info-we-coll' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>Personal Information we may collect:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        "Personal Information" is information that uniquely identifies a user as an individual including (not limited to) for example:
                        <br/><br/>
                            <ul>
                                <li>
                                    Name
                                </li>
                                <li>
                                    Email address
                                </li>
                            </ul>
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='per-info-we-not-coll' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>Personal Information we do not collect:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        Through our website, we do not require and collect information classified as sensitive personal information. Additionally, we ask you not to send us, and you not disclose, any sensitive Personal Information (e.g., information related to racial or ethnic origin, political opinions, religion or other beliefs, health, biometrics or genetic characteristics etc.) on or through the website to us.
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='how-we' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>How we may collect Personal Information:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        We and our third party service providers may collect Personal Information in multiple ways, including:
                        <br/><br/>
                        Through the website: We may collect Personal Information through the website, such as when you creating a login.
                        <br/><br/>
                        Offline: We may collect Personal Information from you offline, such as when you contact us using the details in the <a className={classes.link} href="./contactus.html">Contact Us</a> section of this policy and the website.
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='how-we-per-info' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>How we may use Personal Information:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        We may use the Personal Information:
                        <br/><br/>
                            <ul>
                                <li class="disc">
                                    To communicate with the user using the <a className={classes.link} href="./contactus.html">Contact Us</a> section. 
                                </li>
                                <li>
                                    To respond to the inquiries and fulfil the requests.
                                </li>
                                <li>
                                    For our business purposes, such as data analysis, enhancing, improving, or modifying our Services. 
                                </li>
                                <li>
                                    As deemed necessary, applicable, required or appropriate:
                                </li>
                                <li>
                                    Under applicable law including laws outside your country of residence.
                                </li>
                                <li>
                                    To comply with the legal process.
                                </li>
                                <li>
                                    To respond to requests from government authorities including authorities outside your country of residence.
                                </li>
                                <li>
                                    To protect our operations, assets, or interests or those of any of our third party service providers.
                                </li>
                                <li>
                                    To pursue available remedies or limit the damages that we may sustain.
                                </li>
                            </ul>
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='how-per-info' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>How Personal Information may be disclosed:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                            <ul>
                                <li>
                                    To our third party service providers.
                                </li>
                                <li>
                                    To identify anyone from whom the enquiry using the <a className={classes.link} href="./contactus.html">Contact Us</a> section is received on the website.
                                </li>
                                <li>
                                    In the event of a merger, acquisition or reorganization in line with the privacy and confidentiality of such Personal Information as set forth in this Privacy Policy.
                                </li>
                                <li>
                                    As deemed necessary, applicable, required or appropriate:
                                </li>
                                <li>
                                    Under applicable law including laws outside your country of residence.
                                </li>
                                <li>
                                    To comply with the legal process.
                                </li>
                                <li>
                                    To respond to requests from government authorities including authorities outside your country of residence.
                                </li>
                                <li>
                                    To protect our operations, assets, or interests or those of any of our third party service providers.
                                </li>
                                <li>
                                    To pursue available remedies or limit the damages that we may sustain.
                                </li>
                            </ul>
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='how-you' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>How you can access, change, or suppress your Personal Information:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        If you would like to review, correct, update, suppress or delete Personal Information that you have previously provided to us, you may contact us using the <a className={classes.link} href="./contactus.html">Contact Us</a> section.
                        <br/><br/>
                        We will try to entertain your request as soon as reasonably possible.
                        <br/><br/>
                        We may need to keep certain information for recordkeeping purpose with us. There may also be residual information that will remain in our systems, which might not be removed.
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='gen-info' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>General Information we may collect:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        "General Information" is any information that does not directly reveal user specific identity or does not directly relate to an individual for example browser details, usage data, cookies, demographic data etc. 
                        <br/><br/>
                        If it is required by law to treat General Information as Personal Information, then we may use it only for the purposes for which we use and disclose Personal Information as detailed in this Privacy Policy.
                        <br/><br/>
                        We and our third party service providers through the use of third party services like Google Analytics etc. may collect the following Aggregated General Information (for example, we may aggregate General Information to derive statistics of users who have a particular demographic details):
                        <br/><br/>
                        Statistical data on how the visitor uses the website and the services provided therein.
                        <br/><br/>
                        <ul>
                            <li>
                                To throttle request rate
                            </li>
                            <li>
                                Statistical data on visitor's device and behavior.
                            </li>
                            <li>
                                Geographical location
                            </li>
                        </ul>
                        <br/><br/>
                        We do not have access to the information collected by Google apart from what is displayed in our Google Analytics portal. The information collected by Google may be linked to your Google account and Google may collect additional information if you’re signed in which is neither required by us nor we have access to any such information. It is advisable that you read Google’s privacy policy should you have concerns around such data collection.
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='how-we-coll-gen-info' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>How we may collect General Information:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        We and our third party service providers may collect General Information by using Cookies. Cookies are small piece of code set in your browser by the website you visit. Generally, cookies allow us to collect information such as browser type, pages visited, language preferences, and other anonymous traffic data. Please refer to our <a className={classes.link} href="./cookiepolicy.html">Cookie Policy</a> for more details on our usage of cookies on the website.
                        <br/><br/>
                        Please note that our website currently does not support Do Not Track (DNT) feature.
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='how-we-dis-gen-info' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>How we may use and disclose General Information:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        We may use and disclose General Information for the purpose of statistical analysis and any other purpose, as deemed necessary (except if we are required to do otherwise by law) if it does not qualify as Personal Information under the law. If we combine the General Information with Personal Information, the resultant set shall be treated as Personal Information for as long as it is combined.
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='security' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>Security:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        We seek to use reasonable organizational, technical, and administrative measures to protect Personal Information within our organization to prevent loss, misuse or alteration of your personal information.
                        <br/><br/>
                        However, no system can be 100% secure. If you have a concern around security of your personal information, please get in touch using the <a className={classes.link} href="./contactus.html">Contact Us</a> section.
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='data-transfer' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>Data transfer beyond geographical boundaries:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        Information that we collect may be stored and processed in and transferred between countries where the website is residing and the data is stored between us and our third party service providers to enable the use of the information in accordance with this Privacy Policy. 
                        <br/><br/>
                        Important Notice: Our servers hosting the website are located in Republic of India. Personal Information may reside on servers outside as well as in Republic of India. General Information about users may reside on servers of third party services worldwide depending upon their configurations and policies.
                        <br/><br/>
                        Please be aware that any information provided to us, including Personal Information, will be transferred from your country of origin. Your decision to provide such information to us, or allow us to collect such information through our website constitutes your consent to this data transfer.
                        <br/><br/>
                        If you have a concern around transfer of your Personal Information across boundaries and if you want further information on how it is protected during transfers, please get in touch using the <a className={classes.link} href="./contactus.html">Contact Us</a> section.
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='ret-per' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>Retention Period:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        We will retain your Personal Information for the period necessary to fulfil the purposes we collected it for as outlined in this Privacy Policy unless a longer or shorter retention period is required or permitted by law.
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='update' style={{marginTop:'80px'}}>
                        <text style={theme.textVariants.subHeading}>Updates to this Privacy Policy:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        We may change our Privacy Policy from time to time based on changes in the law or changes in our practice, services or treatment of your personal information. Accordingly, all such changes will be displayed under the Privacy Policy section of the website. Your use of the website following the changes will imply that you accept our revised Privacy Policy.
                        </text>
                    </div>
                    <div data-aos="fade-up"  id='contact' style={{marginTop:'80px',paddingBottom:'80px'}}>
                        <text style={theme.textVariants.subHeading}>Contact Us:</text>
                        <br/>
                        <br/>
                        <text style={theme.textVariants.para}>
                        If you have any questions about this Privacy Policy or want to exercise your rights under the law, please contact us via email at privacy[at]threatexchange[dot]io.
                        <br/>
                        <br/>
                        Please note that privacy concerns raised on the above email will only reach the concerned people at Threat Exchange and will be entertained. If you have a concern regarding this Privacy Policy, your Personal Information with us or its security, please share your concern on the above email only. Concerns shared on any other email or address provided on the website will not reach the right people and cannot be entertained.
                        </text>
                    </div>
                </div>
            </div>
        </div>
    )
}
