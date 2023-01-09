// npm packages
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// react icons
import { GrView } from 'react-icons/gr';
import { TbEdit } from 'react-icons/tb';
import { RiDeleteBin6Line } from 'react-icons/ri';

// service
import { deleteSpecificUser, getUsers } from '../services/Services';

/**
 * Method to handle to show all users data
 * @returns node
 */
const Home = () => {
    // const
    const navigate = useNavigate();

    // state
    const [users, setUsers] = useState([]);

    /**
     * Component did mount
     */
    useEffect(() => {
        (async () => {
            try {
            const results = await getUsers();
            setUsers(results?.data.reverse())   
        } catch (error) {
            console.log(error);
        }
        })();
    }, []);

    /**
     * Method to delete user
     * @param {string} id 
     */
    const deleteUser = async id => {
        try {
            await deleteSpecificUser(id);
            const results = await getUsers();
            setUsers(results?.data.reverse()) 
            navigate('/');
        } catch (error) {
            console.log(error);
        }
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
                                        <button onClick={() => deleteUser(user?.id)} className="btn btn-light text-danger"><RiDeleteBin6Line /></button>
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
export default Home;