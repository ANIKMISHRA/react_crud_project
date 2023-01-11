// npm packages
import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

// react icons
import { SlArrowLeft } from "react-icons/sl";

// component
import { userDetails } from "../Common/userDetails";
import Context1 from "../../Contexts/Context1";

// service
import { getSpecificUser } from "../../Services";
import { popupMessages } from "../../Services/popupMessages";
import { ERROR_MESSAGE } from "../../Services/Constants/Messages";

/**
 * Method to handle to view user details
 * @returns node
 */
const ViewUser = () => {
  // const
  const { id } = useParams();
  const { userDatas } = useContext(Context1);

  // states
  const [user, setUser] = useState({});

  // destructuring user's data.
  const { name, username, email, phone, website } = user;

  /**
   * Component did mount
   */
  useEffect(() => {
      try {
          getSpecificUser(id).then(() => {
          userDetails(id, setUser, userDatas );
        });
      } catch (error) {
        popupMessages(ERROR_MESSAGE);
        console.log(error);
      }
  }, []);

  return (
    <div className="container py-4">
      <Link className="btn btn-dark" to="/">
        <SlArrowLeft size="25px" />
      </Link>
      <h1 className="display-4">User id: {id} </h1>
      <hr />
      <div className="row border border-dark w-50 p-2">
        <div className="col">
          <b>Name&nbsp;:</b>
        </div>
        <div className="col border border-left">&nbsp;&nbsp;{name}</div>
      </div>
      &nbsp;&nbsp;
      <div className="row border border-dark w-50 p-2">
        <div className="col">
          <b> User Name&nbsp;:</b>
        </div>
        <div className="col border border-left">&nbsp;&nbsp;{username}</div>
      </div>
      &nbsp;&nbsp;
      <div className="row border border-dark w-50 p-2">
        <div className="col">
          <b>Email&nbsp;:</b>
        </div>
        <div className="col border border-left">&nbsp;&nbsp;{email}</div>
      </div>
      &nbsp;&nbsp;
      <div className="row border border-dark w-50 p-2">
        <div className="col">
          <b>Phone&nbsp;:</b>
        </div>
        <div className="col border border-left">&nbsp;&nbsp;{phone}</div>
      </div>
      &nbsp;&nbsp;
      <div className="row border border-dark w-50 p-2">
        <div className="col">
          <b>Website&nbsp;:</b>
        </div>
        <div className="col border border-left">&nbsp;&nbsp;{website}</div>
      </div>
      &nbsp;&nbsp;
    </div>
  );
};
export default ViewUser;
