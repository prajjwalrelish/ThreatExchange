import classes from './Error.module.css'
import {MdError} from 'react-icons/md'

const FormError = ({message}) =>{
    return(
        <div style={{height:33}}>
        {message ?
            <div style={{backgroundColor:'#cc0000'}} className={classes.formErrorContainer}>
                <MdError size={22} color='white' style={{marginRight:10}} />
                <text style={{color:'white',fontSize:13}}>{message}</text>
            </div>
            :null
        }
        </div>
    )
}

export default FormError;