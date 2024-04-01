import classes from './Loader.module.css'

const Loader = ({size}) =>{
    return(
        <div style={{borderLeftColor:'white',width: size? size:null, height: size? size:null}} className={classes.loader}></div>
    )
}

export default Loader