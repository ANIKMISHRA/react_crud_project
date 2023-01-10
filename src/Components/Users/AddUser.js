// npm packages
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

// component
import Form from "../Form/Form";
import { validation } from "../FormValidation";
import Context2 from "../../Contexts/Context1";

// service
import { addUser } from "../../Services";
import { SUCCESS_MESSAGE, ERROR_MESSAGE } from "../../Services/Constants/Messages";
import { popupMessages } from "../../Services/popupMessages";

// constant
import { HOME_PATH } from "../../Services/Constants/Path";

/**
 * Method to handle add user
 * @returns node
 */
const AddUser = () => {
    // const
    const navigate = useNavigate();
    const { userDatas, setUserDatas } = useContext(Context2);

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
        try {
            setFormErrors(validation(user));
            setIsSubmit(true);
        } catch (error) {
            popupMessages(ERROR_MESSAGE);
            console.log(error);
        }
    }

    /**
     * Component did mount
     */
    useEffect(() => {
            try {
                if (Object.keys(formErrors).length === 0 && isSubmit) {
                   addUser(user).then((res) => {
                       setUserDatas([...userDatas, res?.data]);
                   })
                    popupMessages(SUCCESS_MESSAGE);
                    navigate(HOME_PATH);
                }       
            } catch (error) {
                popupMessages(ERROR_MESSAGE);
               console.log(error) ;
            }
    }, [formErrors])

    return (
        <div className="container">
            <div className="py-4">
                <h1>Add User</h1>
                <Form user={user} setUser={setUser} onSubmit={onSubmit} formErrors={formErrors} />
            </div>
        </div>
    )
}
export default AddUser;