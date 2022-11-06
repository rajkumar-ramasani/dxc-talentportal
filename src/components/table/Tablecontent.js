import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from "../../App"

const Tablecontents = ({ }) => {
    const contextval = useContext(UserContext);

    var tabledata = contextval.contextdata.tabledata;
    console.log("sss ", contextval.contextdata)
    let fieldscheck = contextval.contextdata.fieldscheck;
    return (
        <tbody>
            {
                tabledata.map((user, key) =>
                    <tr key={key}>
                        <td>{user.emp_id}</td>
                        <td>{user.emp_name}</td>
                        <td>{user.emp_email}</td>
                        <td>{user.job_level}</td>
                        <td>{user.emp_pskill}</td>
                        <td>{user.demand_skill}</td>
                        <td>{user.mtach_skills}</td>
                        {fieldscheck ? <td>{user.demand_id}</td> : ''}
                        {fieldscheck ? <td>{user.percentage.toFixed(0)} </td> : ''}

                    </tr>
                )
            }

        </tbody>
    )
}


export default Tablecontents;
