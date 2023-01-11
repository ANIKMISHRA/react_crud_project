// npm packages
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// component
import Form from "../Form/Form";
import Context1 from "../../Contexts/Context1";
import { userDetails } from "../Common/userDetails";

// services 
import { getSpecificUser, getUsers, updateSpecificUserData } from "../../Services";
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
     * Method to handle on submit (user data updation method)
     * @param {object} event 
     */
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let updatedUser;
           await updateSpecificUserData(user, id).then((res) => {
                 updatedUser = userDatas?.map((users) => {
                    return users.id !== id ? users : res?.data;
                });  
                setUserDatas(updatedUser);
                getUsers();
                navigate(HOME_PATH);
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
               userDetails(id, setUser, userDatas);
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