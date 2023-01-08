// npm packages
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// react icons
import { GrView } from 'react-icons/gr';
import { TbEdit } from 'react-icons/tb';
import { RiDeleteBin6Line } from 'react-icons/ri';

/**
 * Method to handle to show all users data
 * @returns node
 */
const Home = () => {
    // state
    const [users, setUsers] = useState([]);

    /**
     * Component did mount
     */
    useEffect(() => {
        fetchUsers();
    }, [])

    /**
     * Method to fetch users
     */
    const fetchUsers = async () => {
        const results = await axios.get("http://localhost:3003/users");
        setUsers(results.data.reverse())
    }

    /**
     * Method to delete user
     * @param {string} id 
     */
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        fetchUsers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.username}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        <Link to={`/users/view/${user?.id}`} className="btn btn-light" ><GrView /></Link>
                                        <Link to={`/users/edit/${user?.id}`} className="btn btn-light text-primary" ><TbEdit /></Link>
                                        <Link to="/#" onClick={() => deleteUser(user.id)} className="btn btn-light text-danger"><RiDeleteBin6Line /></Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home