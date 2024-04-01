import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import classes from './Paginate.module.css'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// const Paginate = ({ itemsPerPage }) =>{
//     const [currentItems, setCurrentItems] = useState(null);
//     const [pageCount, setPageCount] = useState(0);
//     const [itemOffset, setItemOffset] = useState(0);

//     useEffect(() => {
//         const endOffset = itemOffset + itemsPerPage;
//         console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//         setCurrentItems(items.slice(itemOffset, endOffset));
//         setPageCount(Math.ceil(items.length / itemsPerPage));
//       }, [itemOffset, itemsPerPage]);

//     const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     console.log(
//         `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//     };
//     return(
//         <div className={classes.container}>
//             <ReactPaginate
//                 className={classes.paginate}
//                 pageClassName={classes.pageItem}
//                 nextClassName={classes.nextButtonContainer}
//                 previousClassName={classes.nextButtonContainer}
//                 activeClassName={classes.activePageItem}
//                 disabledClassName={classes.none}
//                 breakClassName={classes.pageItem}
//                 breakLabel="..."
//                 nextLabel="next >"
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={5}
//                 pageCount={pageCount}
//                 previousLabel="< previous"
//                 renderOnZeroPageCount={null}
//             />
//         </div>
//     )
// }

const Paginate = ({currPage,setPage,count}) =>{

    const pageChange = (e) =>{
        console.log(e)
        if(currPage+e<1) return
        if(currPage+e>count) return
        setPage(currPage+e)
        window.scrollTo(0,0)
    }

    return(
        <div className={classes.paginationContainer}>
            <button onClick={() => pageChange(-currPage+1)} className={`${classes.paginationButton} ${classes.paginationButtonActive}`}>
                <IoIosArrowBack/>
                <IoIosArrowBack/>
            </button>
            <button onClick={() => pageChange(-1)} className={classes.paginationButton}>
                <IoIosArrowBack/>
                <h5>Back</h5>
            </button>
            {currPage!==1 && currPage !== count ?
                <button onClick={()=>pageChange(-1)} className={classes.paginationButton}>{currPage-1}</button>
                : 
                    currPage === count ? 
                    <button onClick={()=>pageChange(-2)} className={classes.paginationButton}>{currPage-2}</button>
                : null
            }
            {currPage !==count?
            <button className={`${classes.paginationButton} ${classes.paginationButtonActive}`}>{currPage}</button>
            : <button onClick={()=>pageChange(-1)} className={classes.paginationButton}>{currPage-1}</button>
            }
            {currPage !==count?
            <button onClick={()=>pageChange(1)} className={classes.paginationButton}>{currPage+1}</button>
            : <button className={`${classes.paginationButton} ${classes.paginationButtonActive}`} >{currPage}</button>
            }
            
            {currPage===1?
                <button onClick={()=>pageChange(2)} className={classes.paginationButton}>{currPage+2}</button>
                :null
            }
            <button onClick={() => pageChange(1)} className={classes.paginationButton}>
                <h5>Next</h5>
                <IoIosArrowForward/>
            </button>
            <button onClick={() => pageChange(-currPage+count)} className={`${classes.paginationButton} ${classes.paginationButtonActive}`}>
                <IoIosArrowForward/>
                <IoIosArrowForward/>
            </button>
        </div>
    )
}

export default Paginate