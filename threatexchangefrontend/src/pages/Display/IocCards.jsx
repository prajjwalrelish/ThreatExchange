import React, {useState, useEffect} from 'react';
import theme from '../../theme/index.js';
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Card from "../../components/cards/Card.jsx";
import CardHeader from "../../components/cards/CardHeader.jsx";
import CardIcon from "../../components/cards/CardIcon.jsx";
import CardBody from "../../components/cards/CardBody.jsx";
import CardFooter from "../../components/cards/CardFooter.jsx";
import classes from "../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import HttpsSharpIcon from '@mui/icons-material/HttpsSharp';
import DnsSharpIcon from '@mui/icons-material/DnsSharp';
import LinkSharpIcon from '@mui/icons-material/LinkSharp';
import DomainSharpIcon from '@mui/icons-material/DomainSharp';
import AccessTime from "@material-ui/icons/AccessTime";
import { GetCount, GetIocList } from '../../api/index.js';

export default function IocCards ({handleClick}){

const [count, setCount] = useState({});
const [latestIps, setLatestIps] = useState(null);
const [latestDomains, setLatestDomains] = useState(null);
const [latestUrls, setLatestUrls] = useState(null);
const [latestHashs, setLatestHashs] = useState(null);


useEffect(() => {
    const fetchData = async () => {
        const response = await GetCount();
          if(response.status === 200)
            setCount(response.data);

        const responseIp = await GetIocList(1,"latest-ip",'','','');
          if(responseIp.status === 200)
            setLatestIps(responseIp.data);
        
        const responseDomain = await GetIocList(1,"latest-domain",'','','');
          if(responseDomain.status === 200)
            setLatestDomains(responseDomain.data);

            const responseHash = await GetIocList(1,"latest-hash",'','','');
        console.log("hash data ",responseHash)
            if(responseHash.status === 200)
              setLatestHashs(responseHash.data);
              
        const responseUrl = await GetIocList(1,"latest-url",'','','');
          if(responseUrl.status === 200)
            setLatestUrls(responseUrl.data);

        
      }
      fetchData();
},[])

    return (
        <div style={{backgroundColor:theme.colors.lightDark, marginBlock:30, paddingInline:30}}>    
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card style={{cursor:'pointer'}}>
            <CardHeader stats icon >
            <CardIcon color="dark">
                <DnsSharpIcon/>
              </CardIcon>
              <div style={{color: 'white',fontSize:20, padding:10, margin:10}} className={classes.stats}>
              {count["ip address"]}
              </div> 
            </CardHeader>
            <CardFooter stats>
              <div style={{color: 'white'}} className={classes.stats}>
                  IP
              </div>
              <CardIcon onClick={() => handleClick("ips",false)} color="dark" style={{padding:10, margin:3}}>
              <div style={{color: 'white',fontWeight:'bolder',fontSize:15}} className={classes.stats}>
                  View all IPs
              </div>              
              </CardIcon>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card style={{cursor:'pointer'}}>
            <CardHeader stats icon>
              <CardIcon color="dark">
                <DomainSharpIcon />
              </CardIcon>
              <div style={{color: 'white',fontSize:20, padding:10, margin:10}} className={classes.stats}>
              {count.domains}
              </div> 
            </CardHeader>
            <CardFooter stats>
              <div style={{color: 'white'}} className={classes.stats}>
                Domain
              </div>
              <CardIcon onClick={() => handleClick("domains",false)} color="dark" style={{padding:10, margin:3}}>
              <div style={{color: 'white',fontWeight:'bolder',fontSize:15}} className={classes.stats}>
                  View all Domains
              </div>              
              </CardIcon>
            </CardFooter>
          </Card>
        </GridItem >
        <GridItem xs={12} sm={6} md={3}>
          <Card style={{cursor:'pointer'}}>
            <CardHeader stats icon>
              <CardIcon color="dark">
              <LinkSharpIcon/>
              </CardIcon>
              <div style={{color: 'white',fontSize:20, padding:10, margin:10}} className={classes.stats}>
              {count.url}
              </div> 
            </CardHeader>
            <CardFooter stats>
              <div style={{color: 'white'}} className={classes.stats}>
                URL
              </div>
              <CardIcon onClick={() => handleClick("urls",false)} color="dark" style={{padding:10, margin:3}}>
              <div style={{color: 'white',fontWeight:'bolder',fontSize:15}} className={classes.stats}>
                  View all URLs
              </div>              
              </CardIcon>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card style={{cursor:'pointer'}}>
            <CardHeader stats icon>
              <CardIcon color="dark">
                <HttpsSharpIcon />
              </CardIcon>
              <div style={{color: 'white',fontSize:20, padding:10, margin:10}} className={classes.stats}>
              {count.hash}
              </div> 
            </CardHeader>
            <CardFooter stats>
              <div style={{color: 'white'}} className={classes.stats}>
                Hash
              </div>
              <CardIcon onClick={() => handleClick("hashs",false)} color="dark" style={{padding:10, margin:3}}>
              <div style={{color: 'white',fontWeight:'bolder',fontSize:15}} className={classes.stats}>
                  View all Hashs
              </div>              
              </CardIcon>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
     
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card chart>
            <CardBody>
              <p style={{textAlign:"left",fontSize:"140%",color: 'white'}}>
                  Latest IPs
                  <span style={{float:"right"}}>
                    {count["latest-ip"]}
                  </span>
            </p>
              {latestIps !== null &&
              ( latestIps.map( (item, index) => { 
                return index<5 && 
              <div style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",backgroundColor:"#2F4F4F" ,color: 'white',fontWeight:'bolder',fontSize:15,padding:8, margin:10,marginTop:5,borderRadius:10}}>
                  {item.ip_address}
              </div>
              }))
              } 
              <CardIcon onClick={() => handleClick("ips",true)} color="dark" style={{padding:10,marginLeft:10,marginTop:5,cursor:"pointer"}}>
              <div style={{color: 'white',fontWeight:'bolder',fontSize:15}} className={classes.stats}>
                  View all IPs
              </div>              
              </CardIcon>
            </CardBody>
            <CardFooter chart>
              <div style={{color: 'white'}} className={classes.stats}>
                <AccessTime/> updated 24 hours ago
              </div>  
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card chart>
            <CardBody>
              <p style={{textAlign:"left",fontSize:"140%",color: 'white'}}>
                  Latest Domains
                  <span style={{float:"right"}}>
                    {count["latest-domain"]}
                  </span>
            </p>
              {latestDomains !== null &&
              ( latestDomains.map( (item, index) => { 
                return index<5 && 
              <div style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",backgroundColor:"#2F4F4F" ,color: 'white',fontWeight:'bolder',fontSize:15,padding:8, margin:10,marginTop:5,borderRadius:10}}>
                  {item.domain}
              </div>  
              }))
              } 
              <CardIcon onClick={() => handleClick("domains",true)} color="dark" style={{padding:10, marginLeft:10,marginTop:5,cursor:"pointer"}}>
              <div style={{color: 'white',fontWeight:'bolder',fontSize:15}} className={classes.stats}>
                  View all Domains
              </div>              
              </CardIcon>
            </CardBody>
            <CardFooter chart>
              <div style={{color: 'white'}} className={classes.stats}>
                <AccessTime /> updated 24 hours ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card chart>
            <CardBody>
              <p style={{textAlign:"left",fontSize:"140%",color: 'white'}}>
                  Latest URLs
                  <span style={{float:"right"}}>
                    {count["latest-url"]}
                  </span>
            </p>
              {latestUrls !== null &&
              ( latestUrls.map( (item, index) => { 
                return index<5 && 
              <div style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",backgroundColor:"#2F4F4F" ,color: 'white',fontWeight:'bolder',fontSize:15,padding:8, margin:10,marginTop:5,borderRadius:10}}>
                  {item.url}
              </div>  
              }))
              } 
              <CardIcon onClick={() => handleClick("urls",true)} color="dark" style={{padding:10, marginLeft:10,marginTop:5,cursor:"pointer"}}>
              <div style={{color: 'white',fontWeight:'bolder',fontSize:15}} className={classes.stats}>
                  View all URLs
              </div>              
              </CardIcon>
            </CardBody>
            <CardFooter chart>
              <div style={{color: 'white'}} className={classes.stats}>
                <AccessTime /> updated 24 hours ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card chart>
            <CardBody>
              <p style={{textAlign:"left",fontSize:"140%",color: 'white'}}>
                  Latest Hashs
                  <span style={{float:"right"}}>
                    {count["latest-hash"]}
                  </span>
              </p>
              {latestHashs !== null &&
              ( latestHashs.map( (item, index) => { 
                return index<5 && 
                <div style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",backgroundColor:"#2F4F4F" ,color: 'white',fontWeight:'bolder',fontSize:15,padding:8, margin:10,marginTop:5,borderRadius:10}}>
                {item.hash}
              </div>              
              
              }))
              } 
              <CardIcon onClick={() => handleClick("hashs",true)} color="dark" style={{padding:10, marginLeft:10,marginTop:5,cursor:"pointer"}}>
              <div style={{color: 'white',fontWeight:'bolder',fontSize:15}} className={classes.stats}>
                  View all Hashs
              </div>              
              </CardIcon>
            </CardBody>
            <CardFooter chart>
              <div style={{color: 'white'}} className={classes.stats}>
                <AccessTime /> updated 24 hours ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
     
      </div>
    )
}

