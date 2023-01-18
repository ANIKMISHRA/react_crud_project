// npm packages
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// custom hook
import { useDispatchCustom } from "../Common/CustomHook";

// components
import { registerUser, loginUser } from "../../Redux/action";
import { validation } from "../FormValidation";

// services
import { HOME_PATH } from "../../Services/Constants/Path";
import { popupMessages } from "../../Services/popupMessages";
import { ERROR_MESSAGE, LOGIN_ERROR_MESSAGE, LOGIN_SUCCESS_MESSAGE, REGISTER_SUCCESS_MESSAGE } from "../../Services/Constants/Messages";

const Auth = () => {
  // const
  const dispatch = useDispatchCustom();
  const navigate = useNavigate();
  const users = useSelector((state) => state?.users);

  // states
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});

  // destructuring from state
  const { name, email, password } = user;

  /**
     * Methoid to handle the input change.
     * @param {string} param0 , param1
     */
  const handleInputChange = ({ target: { value = '', name = '' } }) => {
    setUser({ ...user, [name]: value.trimStart() });
}

  /**
   * Method to handle the registration of user
   */
  const onRegister = () => {
    try {
      dispatch(registerUser({ name, email, password }));
      popupMessages(REGISTER_SUCCESS_MESSAGE); 
    } catch (error) {
      console.log(error);
      setFormErrors(validation(user));
      popupMessages(ERROR_MESSAGE);
    }
  };

  /**
   * Method to handle the user login on click.
   */
  const onLogin = () => {
    try {
      const loggedInUser = users?.find(
        (user) => user?.email === email && user?.password === password
      );
      if (loggedInUser) {
        dispatch(loginUser({ loggedInUser }));
        popupMessages(LOGIN_SUCCESS_MESSAGE)
        navigate(HOME_PATH);
      } else {
        // setFormErrors(validation(user))
        popupMessages(LOGIN_ERROR_MESSAGE)
      }  
    } catch (error) {
      console.log(error);
      popupMessages(ERROR_MESSAGE)
    }
  };

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 ">
                <h6 className="mb-0 px-5 pb-3 text-light">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3 text-light">Log In</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="email"
                              className="form-style"
                              placeholder="Your Email"
                              value={email}
                              onChange={handleInputChange}
                              id="logemail"
                              autoComplete="on"
                            />
                            <span className="text-danger">{formErrors?.email}</span>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              className="form-style"
                              placeholder="Your Password"
                              value={password}
                              onChange={handleInputChange}
                              id="logpass"
                              autoComplete="on"
                            />
                            <span className="text-danger">{formErrors?.password}</span>
                          </div>
                          <button
                            onClick={onLogin}
                            className="btn mt-4 text-light"
                          >
                            submit
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3 text-light">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-style"
                              placeholder="Your Full Name"
                              id="logname"
                              value={name}
                              onChange={handleInputChange}
                              autoComplete="on"
                            />
                            <span className="text-danger">{formErrors?.name}</span>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="text"
                              name="email"
                              className="form-style"
                              placeholder="Your Email"
                              value={email}
                              onChange={handleInputChange}
                              id="logemail"
                              autoComplete="on"
                            />
                            <span className="text-danger">{formErrors?.email}</span>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              className="form-style"
                              placeholder="Your Password"
                              value={password}
                              onChange={handleInputChange}
                              id="logpass"
                              autoComplete="on"
                            />
                            <span className="text-danger">{formErrors?.password}</span>
                          </div>
                          <button
                            className="btn mt-4 text-light"
                            onClick={onRegister}
                          >
                            submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
