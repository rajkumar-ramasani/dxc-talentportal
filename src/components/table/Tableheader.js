import React, { useState, useContext } from 'react';
import { UserContext } from "../../App"

const Tableheader = ({ }) => {
    const contextval = useContext(UserContext);
    let fieldscheck = contextval.contextdata.fieldscheck;
    return (
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Job Level</th>
                <th>Primary skill</th>
                <th>Secondary Skill</th>
                <th>{fieldscheck ? "Demand ID" : ''}</th>
                <th>{fieldscheck ? "Percentage match" : ''}</th>
            </tr>
        </thead>
    )
}


export default Tableheader;
