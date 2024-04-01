const Search = ({advItems,search,filterLabels}) =>{
    let result = [...advItems]
    result = result.filter(item=>{
        return item.primary_name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase())
    })
    // if(filterLabels.length)
    //     result = result.filter(item=>{
    //         return checkLabel(item.label,filterLabels)
    //     })
    return result
}

// const checkLabel = (label, filterLabels) =>{
//     for(let i = 0;i<filterLabels.length;i++){
//         let index = label.indexOf(filterLabels[i])
//         if(index!==-1) return true
//     }
//     return false
// }
export default Search