import classes from './Input.module.css'
import theme from '../../theme'
import { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

const TextInput = ({value, onChange, type, containerStyle,placeholder, Icon,multiline, textLeft}) => {
    const [showPass, setShowPass] = useState(false)
    return(
        <div style={containerStyle} className={classes.container}>
            {Icon? <div>{Icon}</div> : null}
            {!multiline?
                <input  
                    value={value} 
                    type={type!=='password'? type : showPass? 'text':'password'} 
                    onChange={(e)=>onChange(e.target.value)} 
                    style={theme.textVariants.input} 
                    placeholder={placeholder} 
                    className={`${classes.input} ${textLeft? classes.left : null}`}    
                />
            :
                <textarea
                    value={value}
                    onChange={(e)=>onChange(e.target.value)}
                    style={theme.textVariants.input} 
                    placeholder={placeholder} 
                    className={`${classes.input} ${textLeft? classes.left : null} ${classes.multilineInput}`}
                    a
                />
            }
            {type==='password'?
            <>
                {value && !navigator.userAgent.includes('Windows')?
                    <>
                    {showPass ?
                        <AiOutlineEye onClick={()=>setShowPass(false)} color='black' size={30} className={classes.eyeIcon}/>:
                        <AiOutlineEyeInvisible onClick={()=>setShowPass(true)} color='black' size={30} className={classes.eyeIcon}/>
                    }
                    </>
                :null}
            </>
                :null
            }
        </div>  
    )
}

export default TextInput