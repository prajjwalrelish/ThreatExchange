
const phoneValidator = (password) =>{
    var passw = /([0-9]).{10}$/;
    if(String(password).match(passw)){
        return true
    }
    else return false
}

export default phoneValidator