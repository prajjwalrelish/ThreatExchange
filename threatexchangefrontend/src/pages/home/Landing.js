import React, { useEffect} from 'react'
import theme from '../../theme'
import classes from './Home.module.css'
import {SocialButtonsGroup} from '../../components'
import 'aos/dist/aos.css'
import Aos from 'aos';

const Landing = () => {
    useEffect(() => {
       Aos.init({duration:1000,once:true})
    }, [])

    return (
        <div style={{textAlign:'center'}}>
            <div className={classes.homeBgImage}></div>
            <text data-aos="fade-up" data-aos-anchor-placement="top-center" style={theme.textVariants.body}>We are</text><br/>
            <text data-aos="fade-up" data-aos-anchor-placement="top-center" style={theme.textVariants.title}>COMING SOON</text>
            <div data-aos="fade-up" style={{marginTop:theme.spacing.xl}}>
                <div className={classes.barContainer}></div>
                <div className={classes.percentage}>
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" style={{paddingBlock:150}}>
                <text style={theme.textVariants.slogan}>In the meanwhile, you may follow us on</text>
                <SocialButtonsGroup containerStyle={{marginTop:theme.spacing.l}} color={'#20B2AA'} size={40}/>
            </div>
        </div>
    )
}

export default Landing
