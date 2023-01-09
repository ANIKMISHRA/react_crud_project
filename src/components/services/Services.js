// npm package
import axios from "axios";

// const 
const baseUrl = 'http://localhost:3003'

// Services
/**
 * Method to get Users.
 * @returns promises
 */
const getUsers = async () => {
    return await axios.get(`${baseUrl}/users`);
}

/**
 * Method to handle add new user
 * @param {string} user 
 * @returns promises
 */
const addUser = async (user) => {
    return await await axios.post(`${baseUrl}/users`, user);
};

/**
 * Method to get specific user data.
 * @param {string} id 
 * @returns promises
 */
const getSpecificUser = async (id) => {
    return await axios.get(`${baseUrl}/users/${id}`);
};

/**
 * Method to update specific user's data
 * @param {{string}} user 
 * @param {string} id 
 * @returns promises
 */
const updateSpecificUserData = async (user, id) => {
    return await axios.put(`${baseUrl}/users/${id}`, user);
};

/**
 * Method to delete specific user
 * @param {string} id 
 * @returns promises
 */
const deleteSpecificUser = async (id) => {
    return await axios.delete(`${baseUrl}/users/${id}`);
}



export { addUser, getSpecificUser, updateSpecificUserData, getUsers, deleteSpecificUser };