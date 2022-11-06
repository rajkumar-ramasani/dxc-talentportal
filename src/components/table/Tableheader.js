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
                <th>Resource Skill</th>
                <th>Demand Skill</th>
                <th>Matched Skill</th>
                {fieldscheck ? <th>Position ID </th> : ''}
                {fieldscheck ? <th>Percentage match </th> : ''}
            </tr>
        </thead>
    )
}


export default Tableheader;
