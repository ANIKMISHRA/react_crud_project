// npm packages
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// component
import Form from "../Form/Form";
import Context1 from "../../Contexts/Context1";
import { viewComponent } from "../Common/ViewComponent";

// services 
import { getSpecificUser, updateSpecificUserData } from "../../Services";
import { popupMessages } from "../../Services/popupMessages";
import { UPDATED_MESSAGE, ERROR_MESSAGE } from "../../Services/Constants/Messages";

// constant
import { HOME_PATH } from "../../Services/Constants/Path";

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
            updateSpecificUserData(user, id).then(() => {
                const updatedUser = userDatas?.map((users) => {
                    return users.id !== id ? users : user;
                });  
                navigate(HOME_PATH);
                setUserDatas(updatedUser)
                popupMessages(UPDATED_MESSAGE);
            })
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
            getSpecificUser(id).then(() => {
               viewComponent(id, setUser, userDatas);
            })
        } catch (error) {
            popupMessages(ERROR_MESSAGE);
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