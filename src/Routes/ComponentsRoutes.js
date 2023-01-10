// npm packages
import React from 'react'
import {  Route, Routes } from 'react-router-dom';

// components
import Home from "../Pages/Home.js";
import AddUser from '../Components/Users/AddUser';
import EditUser from '../Components/Users/EditUser';
import ViewUser from '../Components/Users/User';

/**
 * Method to handle components routes.
 * @returns 
 */
const ComponentsRoutes = () => {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users/add" element={<AddUser/>} />
          <Route exact path="/users/edit/:id" element={<EditUser />} />
          <Route exact path="/users/view/:id" element={<ViewUser />} />
        </Routes>
    </div>
  )
}
export default ComponentsRoutes;