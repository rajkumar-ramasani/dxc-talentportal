import React, { useState, useEffect } from 'react';
import Tableheader from './Tableheader';
import Tablecontents from './Tablecontent';

const TableDisplay = ({ }) => {
    const onLinkClick = (e) => {
        e.preventDefault();
      window.history.back();
    };
    return (
       <div> <a className='back' href='#' onClick={onLinkClick}> Back To Dashboard </a>
        <table className="table-main">
            <Tableheader />
            <Tablecontents />

        </table>
        </div>
    )
}


export default TableDisplay;