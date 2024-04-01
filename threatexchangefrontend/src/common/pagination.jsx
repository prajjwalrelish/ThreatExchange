import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { GetIocCount } from "../api";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { darkGreenColor, darkCardHeader, grayColor } from "../assets/jss/material-dashboard-react";

const useStyles = makeStyles((theme) => ({
  
  ul: {
    "& .MuiPaginationItem-page": {
      backgroundColor: "black",
      color: "white",
      // borderColor: 'rgba(0, 0, 0, 0.23)',
    }
  },
  root: {
    "& .Mui-selected": {
      backgroundColor: "black",
      color: "white"
    },

    "& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)": {
      backgroundColor: darkGreenColor,
      color: "white"
    }
  },

}));

const BasicPagination = (props) => {
  const { itemscount, pageSize, currentPage, onPageChange, list } = props;                                            
  // const [pagesCount, setPagesCount] = useState(0);
  const [count, setCount] = useState({});

  useEffect(() => {
      const fetchData = async () => {
          const response = await GetIocCount();
          if(response.status === 200)
              setCount(response.data);
        }
        fetchData();
  },[])

  // const pagesCount = Math.ceil(count["ip address"] / pageSize);
  
  const classes = useStyles(); 

  const handleChange = (event, value) => {
    onPageChange(value);
  };

  let pagesCount = 0; 
  if(list === "ip")
    pagesCount = Math.ceil(count["ip address"] / pageSize);
  else if(list === "domain")
    pagesCount = Math.ceil(count["domains"] / pageSize);
  else if(list === "url")
    pagesCount = Math.ceil(count["url"] / pageSize);
  else
  pagesCount = Math.ceil(count["hash"] / pageSize);


  if (pagesCount === 1) return null;
      const pages = _.range(1, pagesCount + 1);  
      
  return (
 
    <Pagination
      classes={{ root: classes.root, ul: classes.ul }}
      variant="outlined"
      count={pagesCount}
      size="large"
      onChange={handleChange}
    />
    
  
  );
};

Pagination.propTypes = {
  itemscount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default BasicPagination;
