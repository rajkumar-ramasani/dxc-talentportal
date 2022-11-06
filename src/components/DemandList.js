import axios from "axios"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from '../App'

export default function DemandList(data) {
    const contextval = useContext(UserContext);
    var tabledata = contextval.contextdata.tabledata;
    return (
        <div>
            <h1>List Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID </th>
                        <th>Capability</th>
                        <th>Job Level</th>
                        <th>Primary Skill</th>
                        <th>Secondary Skill</th>
                        <th>Required Date </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tabledata.map((user, key) =>
                            <tr key={key}>
                                <td>{user.position_id}</td>
                                <td>{user.capability}</td>
                                <td>{user.job_level}</td>
                                <td>{user.primary_skill}</td>
                                <td>{user.secondary_skill}</td>
                                <td>{user.start_date}</td>


                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
