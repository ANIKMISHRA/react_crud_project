// npm packages
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// component
import Form from "../layout/Form";

/**
 * Method to handle add user
 * @returns node
 */
const AddUser = () => {
    // const
    const navigate = useNavigate();

    // states
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    /**
     * Method to handle on submit
     * @param {object} event
     */
    const onSubmit = async event => {
        event.preventDefault();

        setFormErrors(validate(user));
        setIsSubmit(true);
    }

    /**
     * Component did mount
     */
    useEffect(async (e) => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            await axios.post("http://localhost:3003/users", user);
            navigate("/")
        }

    }, [formErrors])

    // form validation
    const validate = (users) => {

        const errors = {}
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!users.name) {
            errors.name = "Name is required!";
        }
        if (!users.username) {
            errors.username = "Username is required!";
        }
        if (!users.email) {
            errors.email = "Email is required!";
        }
        else if (!regex.test(users.email)) {
            errors.email = "This is not a valid email!";
        }
        if (!users.phone) {
            errors.phone = "Phone is required!";
        }
        if (!users.website) {
            errors.website = "Website is required!";
        }
        return errors;
    }

    return (
        <div className="container">
            <h1>Add User</h1>
            <Form user={user} setUser={setUser} onSubmit={onSubmit} formErrors={formErrors} />
        </div>
    )
}
export default AddUser;