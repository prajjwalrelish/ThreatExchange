import React, { useState, useEffect, useContext }from "react";
// core components
import classes1 from '../dashboard/Dashboard.module.css'
import theme from '../../theme'
import { SelectInput } from '../../components'
import { useHistory } from 'react-router-dom';
import DisplayIoc from "../Display/displayIoc.jsx";
import { GetIocList, GetCount, GetIocDetails, GetFilteredIocs } from "../../api";

export default function Ioc({match}) {
 
  const history = useHistory()
  const [iocs, setIocs] = useState({})
  const [count, setCount] = useState(0)
  const [currPage, setCurrPage] = useState(1);
  const [filter, setFilter] = useState({})
  const [tag, setTag] = useState({})
  const [filOptions, setFilOptions] = useState([])
  const [tagOptions, setTagOptions] = useState([])
  const [search, setSearch] = useState('')
  var trimedList = ''
  if(match.params.list)
     trimedList = match.params.list.substring(0, match.params.list.length - 1);

  useEffect( () => {
    const fetchIocs = async () => {
      setTag('')
      setFilter('')
      const { data:filters } = await GetIocDetails()
      if(match.params.list){
      const tagOptions = filters.tags[trimedList.includes("latest")?trimedList.substring(7,trimedList.length):trimedList].map( item => {return {value:item,label:item}} )
      const filOptions = filters.refrence[trimedList.includes("latest")?trimedList.substring(7,trimedList.length):trimedList].map( item => {return {value:item,label:item}} )
      setTagOptions(tagOptions)
      setFilOptions(filOptions)
      }
    }
    fetchIocs()
  },[match.params.list])

  // const tagOptions = [
  //   { value: 'Tag1', label: 'Tag1' },
  //   { value: 'Tag2', label: 'Tag2' },
  //   { value: 'Tag3', label: 'Tag3' },
  //   { value: 'Tag4', label: 'Tag4' },
  // ]

  // console.log("tttt ",tagOptions)
  // console.log("kkkkkkkkk ",tag)

  

  // const filOptions = [
  //   { value: 'none', label: 'None (0.0)' },
  //   { value: 'low', label: 'Low (1.0-3.9)' },
  //   { value: 'medium', label: 'Medium (4.0-6.9)' },
  //   { value: 'high', label: 'High (7.0-8.9)' },
  //   { value: 'critical', label: 'Critical (9.0-10.0)'}
  // ]


  
  const handleClick = (list,isLatest) => {
    return(
      isLatest ? 
      history.push(`/dashboard/ioc/latest-${list}`)
      : history.push(`/dashboard/ioc/${list}`)
    )
  }

  const getLatestIocCount = async () => {
    const { data } = await GetCount()
    return  Math.ceil(data["latest-ip"]/20)

  }

  const fetchData = async (page,list,search,tag,refrence) => {
    const { data } = await GetIocList(page,list,search,tag,refrence);
    console.log("dataaa lates ",data )
    list.includes("latest") ? setIocs( data ) : setIocs( data.results );
    list.includes("latest") ? setCount(await getLatestIocCount()) : setCount( Math.ceil(data.count / 20) );
    setCurrPage(page)
}

const onSearch = (text) =>{
  setSearch(text)
  if(text === ""){
    fetchData(currPage,trimedList,'',tag.value,filter.value)
  }
  else {
  
  let search = text.trim()
  const res = Search({iocs, search})
  setIocs(res)
  setCount( Math.ceil(res.count / 20) );
  }
}

const Search = ({iocs,search}) =>{
  
  let result = [...iocs]
  result = result.filter(item=>{
    if(match.params.list.includes("ip"))
      return item.ip_address.toLowerCase().includes(search.toLowerCase()) || item.source_id.toLowerCase().includes(search.toLowerCase())
    else if(match.params.list.includes("domain"))
      return item.domain.toLowerCase().includes(search.toLowerCase()) || item.source_id.toLowerCase().includes(search.toLowerCase())
    else if(match.params.list.includes("url"))
      return item.url.toLowerCase().includes(search.toLowerCase()) || item.source_id.toLowerCase().includes(search.toLowerCase())
    else (match.params.list.includes("hash"))
      return item.hash.toLowerCase().includes(search.toLowerCase()) || item.source_id.toLowerCase().includes(search.toLowerCase())
  })
  // if(filterLabels.length)
  //     result = result.filter(item=>{
  //         return checkLabel(item.label,filterLabels)
  //     })
  return result
}

const onFilter = () => {
  // e.preventDefault()
  setCurrPage(1)
  console.log("taggggg ",tag)
  if(search === '' && tag.value === undefined && filter.value !== undefined)
    fetchData(1,trimedList,'','',filter.value)
  else if(search === '' && filter.value === undefined && tag.value !== undefined)
    fetchData(1,trimedList,'',tag.value,'')
  else if(search === '' && filter.value !== undefined && tag.value !== undefined)
    fetchData(1,trimedList,'',tag.value,filter.value)
  else if(search !== '' && filter.value !== undefined && tag.value !== undefined)
    fetchData(1,trimedList,search,tag.value,filter.value)
}

  
    return (
      <div style={{backgroundColor:theme.colors.dark,paddingInline:20,paddingBlock:20}}>
            {match.params.list && 
            <div className={classes1.topFilterVul} style={{backgroundColor:theme.colors.lightDark}}>
                <div className={classes1.filContent}>
                    <SelectInput
                        options={tagOptions}
                        value={tag}
                        setValue={(selectedTag)=>setTag(selectedTag)}
                        placeholder={'Select a Tag'}
                    />
                </div>
                <div className={classes1.filContent}>
                    <SelectInput
                        options={filOptions}
                        value={filter}
                        setValue={(filter)=>setFilter(filter)}
                        placeholder={'Filter By'}
                    />
                </div>
                <div className={`${classes1.searchVul} ${classes1.filContent}`}>
                <input
                        value={search}
                        // onChange={(e)=> setSearch(e.target.value)}
                        onChange={(e)=> onSearch(e.target.value)}
                        // onChange={(text)=>onSearch(text)}
                        placeholder={'search'}
                        />
                  </div>
                    <div className={`${classes1.searchVul} ${classes1.filContent}`}> 
                        <button onClick={onFilter}>Search</button>
                    </div>
            
            </div>
}

          <DisplayIoc handleClick={handleClick} match={match} fetchData={fetchData} iocs={iocs} count={count}/> 
           
      </div>
    );
  }




 