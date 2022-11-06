import React, { useState, useEffect } from 'react';
import Tableheader from './Tableheader';
import Tablecontents from './Tablecontent';

const TableDisplay = ({ }) => {

    return (

        <table>
            <Tableheader />
            <Tablecontents />

        </table>

    )
}


export default TableDisplay;