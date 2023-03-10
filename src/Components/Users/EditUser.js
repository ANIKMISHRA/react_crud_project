// npm packages
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// components
import Form from "../Form/Form";
import { useContext4 } from "../Common/CustomHook";
import { userDetails } from "../Common/userDetails";
import hocComponent from "../../HocComponent/Hoc";

// services
import {
  getSpecificUser,
  getUsers,
  updateSpecificUserData,
} from "../../Services";
import { popupMessages } from "../../Services/popupMessages";
import {
  UPDATED_MESSAGE,
  ERROR_MESSAGE,
} from "../../Services/Constants/Messages";

// constant
import { HOME_PATH } from "../../Services/Constants/Path";

/**
 * Method to handle edit any specific user details and then use to change and update.
 * @returns node
 */
const EditUser = () => {
  // consts
  const navigate = useNavigate();
  const { id } = useParams();
  const { userDatas, setUserDatas } = useContext4();

  // states
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  /**
   * Method to handle the updation of edited user on click 'onSubmit' button.
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
      });
    } catch (error) {
      popupMessages(ERROR_MESSAGE);
      console.log(error);
    }
  };

  /**
   * Component did mount
   */
  useEffect(() => {
    try {
      getSpecificUser(id).then(() => {
        userDetails(id, setUser, userDatas);
      });
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
  );
};
export default hocComponent(EditUser);
