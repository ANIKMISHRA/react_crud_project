// npm packages
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// component
import Form from "../Form/Form";
import Context1 from "../../Contexts/Context1";

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
    const { userDatas, setUserDatas } = useContext(Context1);

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
    const onSubmit = event => {
        event.preventDefault();
        try {
            const updatedUser = userDatas?.map((users) => {
                return users.id !== id ? users : user;
            });   // updateSpecificUserData(user, id);
            console.log("dfasfsdafsad",updatedUser);
            setUserDatas(updatedUser)
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
            try {
                const user = userDatas?.find((users) => {
                    if(users?.id === id) {
                        return user;
                    }
                    return users;
                });                // getSpecificUser(id);
                setUser(user);
            } catch (error) {
                console.log(error);
            }
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