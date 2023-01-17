// npm packages
import React from 'react'
import {  Route, Routes } from 'react-router-dom';

// components
import Home from "../Pages/Home.js";
import Auth from '../Components/Auth/Auth.js';
import AddUser from '../Components/Users/AddUser';
import EditUser from '../Components/Users/EditUser';
import ViewUser from '../Components/Users/User';

// constants
import { VIEW_USER_PATH, HOME_PATH, EDIT_USER_PATH, ADD_USER_PATH, LOGIN_PATH } from '../Services/Constants/Path.js';

/**
 * Method to handle components routes.
 * @returns 
 */
const ComponentsRoutes = () => {
  return (
    <div>
        <Routes>
          <Route exact path={`${HOME_PATH}`} element={<Home />} />
          <Route exact path={`${LOGIN_PATH}`} element={<Auth/>} />
          <Route exact path={`${ADD_USER_PATH}`} element={<AddUser/>} />
          <Route exact path={`${EDIT_USER_PATH}/:id`} element={<EditUser />} />
          <Route exact path={`${VIEW_USER_PATH}/:id`} element={<ViewUser />} />
        </Routes>
    </div>
  )
}
export default ComponentsRoutes;