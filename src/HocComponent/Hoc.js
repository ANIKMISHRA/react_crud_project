// npm packages
import React from "react";
import { useSelector } from "react-redux";

// component
import Home from "../Pages/Home";

// services
import { USER_NOT_LOGGINED_MESSAGE } from "../Services/Constants/Messages";
import { popupMessages } from "../Services/popupMessages";


const hocComponent = (OriginalComponent, isHome = false) => {
  return (props) => {
    const loggedInUser = useSelector((state) => state?.user);

    const renderComponent = () => {
      if (isHome) {
        return <OriginalComponent loggedInUser={loggedInUser} />;
      }

      if (loggedInUser) {
        return <OriginalComponent {...props} />;
      } else {
        return popupMessages(USER_NOT_LOGGINED_MESSAGE), (<Home />);
      }
    };
    return <>{renderComponent()}</>;
  };
};
export default hocComponent;
