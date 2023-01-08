// npm packages
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// component
import Form from "../layout/Form";

/**
 * Method to handle to edit user data.
 * @returns node
 */
const EditUser = () => {

    // consts
    const navigate = useNavigate();
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
     * Method to handle the on submit.
     * @param {object} event 
     */
    const onSubmit = async event => {
        event.preventDefault();

        await axios.put(`http://localhost:3003/users/${id}`, user);
        navigate("/")
    }

    /**
     * Method to fetch users.
     */
    const fetchUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data)
    }

    /**
     * Component did mount
     */
    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div className="container">
            <h1>Edit User</h1>
            <Form user={user} setUser={setUser} onSubmit={onSubmit} id={id} />
        </div>
    )
}
export default EditUser;