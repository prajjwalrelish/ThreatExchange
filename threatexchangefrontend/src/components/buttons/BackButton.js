import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import {useHistory} from 'react-router-dom'

const BackButton = () => {
    const history = useHistory()

    return (
        <button style={{display:'flex',flexDirection:'row',alignItems:'center',backgroundColor:'transparent',outline:'none',border:'none'}} onClick={()=>history.goBack()}>
                <IoIosArrowBack color='rgba(255,255,255,0.7)' size={25}/>
                <text style={{color:'rgba(255,255,255,0.7)',fontWeight:'500',fontSize:18}}>Back</text>
        </button>
    )
}

export default BackButton
