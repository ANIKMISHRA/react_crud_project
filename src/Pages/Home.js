// npm packages
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// components
import { useContext2 } from "../Components/Common/CustomHook";

// react icons
import { GrView } from "react-icons/gr";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";

// service
import { deleteSpecificUser } from "../Services";
import { popupMessages } from "../Services/popupMessages";
import { ERROR_MESSAGE, DELETED_MESSAGE } from "../Services/Constants/Messages";

// constants
import {
  HOME_PATH,
  EDIT_USER_PATH,
  VIEW_USER_PATH,
} from "../Services/Constants/Path";

/**
 * Method to handle the whole user interface.
 * @returns node
 */
const Home = () => {
  // const
  const navigate = useNavigate();
  const { userDatas, setUserDatas } = useContext2();

  /**
   * Method to handle the deletion of any specific user form user listing on behalf of user id.
   * @param {string} id
   */
  const deleteUser = async (id) => {
    try {
      await deleteSpecificUser(id).then(() => {
        let updatedDatas = userDatas?.filter((user) => user?.id !== id);
        setUserDatas(updatedDatas);
      });
      popupMessages(DELETED_MESSAGE);
      navigate(HOME_PATH);
    } catch (error) {
      popupMessages(ERROR_MESSAGE);
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow mt-3">
          <thead className="thead-dark ">
            <tr className="align-middle">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th className="text-center" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userDatas &&
              userDatas?.map((user, index) => (
                <tr className="align-middle text_font" key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className="bg-light">{user?.name}</td>
                  <td className="bg-light">{user?.username}</td>
                  <td className="bg-light">{user?.email}</td>
                  <td className="bg-light text-center">
                    <Link
                      to={`${VIEW_USER_PATH}/${user?.id}`}
                      className="btn btn-light"
                    >
                      <GrView size="18px" />
                    </Link>
                    <Link
                      to={`${EDIT_USER_PATH}/${user?.id}`}
                      className="btn btn-light text-primary"
                    >
                      <TbEdit size="18px" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteUser(user?.id)}
                      className="btn btn-light text-danger"
                    >
                      <RiDeleteBin6Line size="18px" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
