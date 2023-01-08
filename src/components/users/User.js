// npm packages
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

/**
 * Method to handle to view user details
 * @returns node
 */
const ViewUser = () => {
    // const
    const { id } = useParams();

    // states
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    /**
     * Component did mount
     */
    useEffect(() => {
        fetchUsers();
    }, [])

    /**
     * Method to fetch users 
     */
    const fetchUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data)
    }

    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">Back To Home</Link>
            <h1 className="display-4">User id: {id} </h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item"> Name:{user.name}</li>
                <li className="list-group-item"> User Name:{user.username}</li>
                <li className="list-group-item"> Email:{user.email}</li>
                <li className="list-group-item"> Phone:{user.phone}</li>
                <li className="list-group-item"> Website:{user.website}</li>
            </ul>
        </div>
    )
}
export default ViewUser;