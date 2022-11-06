import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Resources(data) {

    console.log("DATA=="+JSON.stringify(data))
    return (
        <div>
            <h1>List Users</h1>
            <table className="table-main">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                    
                </tbody>
            </table>
        </div>
    )
}
