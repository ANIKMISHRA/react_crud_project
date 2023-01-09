// npm packages
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// component
import Form from "../layout/Form";

// services 
import { getSpecificUser, updateSpecificUserData } from "../services/Services";

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
     * Method to handle the on submit.(updation)
     * @param {object} event 
     */
    const onSubmit = async event => {
        event.preventDefault();
        try {
            await updateSpecificUserData(user, id);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }


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
    }, []);

    return (
        <div className="container">
            <h1>Edit User</h1>
            <Form user={user} setUser={setUser} onSubmit={onSubmit} id={id} />
        </div>
    )
}
export default EditUser;