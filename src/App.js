// npm packages
import React, { useState, useMemo, useEffect } from "react";

// components
import Navbar from "./Layouts/Navbar/Navbar";
import ComponentsRoutes from "./Routes/ComponentsRoutes";
import Context1 from "./Contexts/Context1";
import Context2 from "./Contexts/Context2";
import Context3 from "./Contexts/Context3";
import Context4 from "./Contexts/Context4";

// service
import { getUsers } from "./Services";
import { ERROR_MESSAGE } from "./Services/Constants/Messages";
// styles
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const App = () => {
  // state
  const [userDatas, setUserDatas] = useState([]);

  /**
   * component did mount
   */
  useEffect(() => {
    try {
      getUsers().then((res) => {
        setUserDatas(res?.data.reverse());
      })
    } catch (error) {
      popupMessages(ERROR_MESSAGE);
      console.log(error);
    }
  }, [])

  /**
   * useMemo hook stop the rerendring again and again.
   */
  const userMemoiseDatas = useMemo(() => {
    return {
      userDatas,
      setUserDatas,
    };
  });

  return (
    <div className="App">
      <Navbar />
      <Context1.Provider value={userMemoiseDatas}>
        <Context2.Provider value={userMemoiseDatas}>
          <Context3.Provider value={userMemoiseDatas}>
            <Context4.Provider value={userMemoiseDatas}>
              <ComponentsRoutes />
            </Context4.Provider>
          </Context3.Provider>
        </Context2.Provider>
      </Context1.Provider>
    </div>
  );
};
export default App;
