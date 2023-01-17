import { REGISTER_USER, LOGIN_USER } from "./constants";

export const registerUser = ({name, email, password }) => {
    return {
      type: REGISTER_USER,
      payload: {
        id: (new Date()).getTime(),
        name, email, password
      }
    };
  };

  export const loginUser = ({loggedInUser}) => {
    return {
      type: LOGIN_USER,
      payload: {loggedInUser},
    };
  };
