import React from 'react'
import classes from '../../styles/Dashboard.module.css'
import theme from '../../theme'
import {FaRegEdit} from 'react-icons/fa'

export default function Updates() {
    return (
        <div style={{backgroundColor:theme.colors.dark,minHeight:'100vh',paddingTop:10}}>
            <div className={classes.divide}>
                <div className={classes.left}>
                    <text style={{fontWeight:'normal',color:theme.colors.whiteoff,fontSize:20}}>Last TCG Updates</text>
                    <div className={classes.timlineBox}>
                        <div className={classes.timelineLeft}>
                            <div style={{width:20}}>
                                <div style={{display:'flex',width:70,marginLeft:-15,flexDirection:'row',backgroundColor:theme.colors.footer,padding:10,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                                    <text style={{color:theme.colors.whiteoff,fontSize:12}}>24 May,2021</text>
                                </div>
                            </div>
                            <div style={{backgroundColor:theme.colors.whiteoff,width:3,height:30}}></div>
                            <div className={classes.editIcon}>
                                <FaRegEdit />
                            </div>
                            <div className={classes.timeLine}></div>
                            <div className={classes.editIcon}>
                                <FaRegEdit />
                            </div>
                            <div className={classes.timeLine}></div>
                        </div>
                        <div className={classes.timelineRight}>
                            <div className={`${classes.border} ${classes.editBorder}`}>
                                <text style={{color:theme.colors.white,fontSize:18}}>CVSS v3.0 has Changed</text>
                                <hr/>
                                <text style={{color:theme.colors.whiteoff,fontSize:14}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</text>
                                <div className={classes.labelBox} style={{marginTop:12}}>
                                    <text style={{color:theme.colors.whiteoff,fontSize:18}}>Refered Changed</text>
                                    <text style={{color:theme.colors.whiteoff,fontSize:18}}>0 Changed, 5 Added, 0 Removed</text>
                                </div>
                                <table style={{width:'100%',color:theme.colors.whiteoff,wordBreak:'break-all',marginTop:25,paddingBlock:10,textAlign:'center',borderRadius:5,backgroundColor:theme.colors.footer}}>
                                    <tr>
                                        <th>Vendors</th>
                                        <th>Products</th>
                                    </tr>
                                    <tr>
                                        <td>Apache,Canonical,Debian and 3 more</td>
                                        <td>Log4j,Ubuntu,Linux,Debian</td>
                                    </tr>
                                </table>
                            </div>
                            <div className={`${classes.border} ${classes.editBorder}`}>
                                <text style={{color:theme.colors.white,fontSize:18}}>CVSS v3.0 has Changed</text>
                                <hr/>
                                <text style={{color:theme.colors.whiteoff,fontSize:14}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</text>
                                <div className={classes.labelBox} style={{marginTop:12}}>
                                    <text style={{color:theme.colors.whiteoff,fontSize:18}}>Refered Changed</text>
                                    <text style={{color:theme.colors.whiteoff,fontSize:18}}>0 Changed, 5 Added, 0 Removed</text>
                                </div>
                                <table style={{width:'100%',color:theme.colors.whiteoff,wordBreak:'break-all',marginTop:25,paddingBlock:10,textAlign:'center',borderRadius:5,backgroundColor:theme.colors.footer}}>
                                    <tr>
                                        <th>Vendors</th>
                                        <th>Products</th>
                                    </tr>
                                    <tr>
                                        <td>Apache,Canonical,Debian and 3 more</td>
                                        <td>Log4j,Ubuntu,Linux,Debian</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <div style={{marginTop:40}} className={classes.border}>
                        <text style={{fontSize:18,color:theme.colors.whiteoff}}>Subscriptions</text><br/><br/>
                        <text style={{fontSize:14,color:theme.colors.gray,fontWeight:'bold'}}>Vendors(6)</text><br/>
                        <div className={classes.tagItems}>
                            <text>Linux</text>
                            <text>Windows</text>
                            <text>MaxOs</text>
                            <text>siedjd</text>
                            <text>Lidklsjf sdkx</text>
                            <text>Linux</text>
                        </div><br/>
                        <text style={{fontSize:14,color:theme.colors.gray,fontWeight:'bold'}}>Products (5)</text><br/>
                        <div className={classes.tagItems}>
                            <text>Linux</text>
                            <text>Windows</text>
                            <text>MaxOs</text>
                            <text>siedjd</text>
                            <text>Lidklsjf sdkx</text>
                        </div>
                    </div>
                    <div style={{marginTop:40}} className={classes.border}>
                        <text style={{fontSize:18,color:theme.colors.whiteoff}}>Tags</text><br/><br/>
                        <div className={classes.tagItems}>
                            <text>Linux</text>
                            <text>Windows</text>
                            <text>MaxOs</text>
                            <text>siedjd</text>
                            <text>Lidklsjf sdkx</text>
                            <text>Linux</text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
