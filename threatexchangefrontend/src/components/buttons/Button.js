import classes from './Button.module.css'
import theme from '../../theme'
import Loader from '../loader/Loader'

const ButtonContained = ({label, loading, type, onClick, disabled}) =>{
    return <button
                className={`${classes.containedButton}`} 
                type={type ? type : 'button'} 
                onClick={ onClick} 
                onTouchStart={ onClick }
                disabled={disabled}>
                     {loading?
                 <Loader/>:
                 <>
                 <text style={theme.textVariants.button}>{label}</text>
                 </>}
            </button>
}

export default ButtonContained
