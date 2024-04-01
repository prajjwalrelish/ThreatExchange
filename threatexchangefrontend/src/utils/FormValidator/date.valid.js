
const dateValidator = (date) =>{
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
    if (date_regex.test(date)) {
        return true
    }
    return false
}

export default dateValidator