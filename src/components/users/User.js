// npm packages
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// service
import { getSpecificUser } from "../services/Services";

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
        (async () => {
            try {
                const result = await getSpecificUser(id);
                setUser(result?.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])

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