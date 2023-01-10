// npm packages
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// component
import Form from "../../Layouts/Form/Form";

// services 
import { getSpecificUser, updateSpecificUserData } from "../../Services";
import { popupMessages } from "../../Services/popupMessages";
import { UPDATED_MESSAGE, ERROR_MESSAGE } from "../../Services/Constants/Messages";

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
            popupMessages(UPDATED_MESSAGE);
            navigate("/");
        } catch (error) {
            popupMessages(ERROR_MESSAGE)
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
            <div className="py-4">
                <h1>Edit User</h1>
                <Form user={user} setUser={setUser} onSubmit={onSubmit} id={id} />
            </div>
        </div>
    )
}
export default EditUser;