import React from "react";
import Card from "../components/cards/Card";
import { useHistory } from 'react-router-dom';
 // import TableHeader from "./tableHeader";
// import TableBody from "./tableBody";
// import { borderRadii } from './../theme/measurement';

const Table = ({ data, list }) => {

  const history = useHistory()

  const handleClick = (list,uuid) => {
    console.log("console clicked");
    return(
      history.push(`/dashboard/ioc/${list}/${uuid}`)
    )
  }

  return (
    <React.Fragment>
{/* <div style={{textAlign: "center"}}> */}
  {/* <div style={{display: "inline-block"}}> */}
{data.map((item) => (
    <div key={item.uuid}
    onClick={() => handleClick(list,item.uuid)}
    >
      
      <Card 
        
        style={{paddingTop:15,paddingBottom:15,margin:15,textAlign: "center"}}
      >
        <div style={{color: 'white',fontSize:20}}>
          {list === "ip" && item.ip_address}
          {list === "domain" && item.domain}
          {list === "url" && item.url}
          {list === "hash" && item.hash}
        </div>
        </Card>
     </div> 
  )
)}
      {/* <TableHeader columns={columns} /> */}
      {/* <TableBody data={data} columns={columns} /> */}
      </React.Fragment>
  );
};

export default Table;
