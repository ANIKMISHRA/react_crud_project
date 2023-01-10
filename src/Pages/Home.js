// npm packages
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// components
import Context1 from '../Contexts/Context1';

// react icons
import { GrView } from 'react-icons/gr';
import { TbEdit } from 'react-icons/tb';
import { RiDeleteBin6Line } from 'react-icons/ri';

// service
import { deleteSpecificUser, getUsers } from '../Services';
import { popupMessages } from '../Services/popupMessages';
import { ERROR_MESSAGE, DELETED_MESSAGE } from '../Services/Constants/Messages';

/**
 * Method to handle to show all users data
 * @returns node
 */
const Home = () => {
    // const
    const navigate = useNavigate();
    const {userDatas, setUserDatas } = useContext(Context1);

    // state
    const [users, setUsers] = useState([]);

    /**
     * Component did mount
     */
    // useEffect(() => {
    //     (async () => {
    //         try {
    //         const results = await getUsers();
    //         setUsers(results?.data.reverse())   
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     })();
    // }, []);

    /**
     * Method to delete user
     * @param {string} id 
     */
    const deleteUser = async id => {
        try {
            // // await deleteSpecificUser(id);
            // // const results = await getUsers();
            // setUsers(results?.data.reverse()) 
           const updatedDatas = userDatas?.filter((user) => user?.id !== id);
           setUserDatas(updatedDatas);
            popupMessages(DELETED_MESSAGE);
            navigate('/');
        } catch (error) {
            popupMessages(ERROR_MESSAGE);
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table border shadow mt-3">
                    <thead className="thead-dark ">
                        <tr className='align-middle'>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th className='text-center' scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          userDatas && userDatas?.map((user, index) => (
                                <tr className='align-middle text_font' key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td className='bg-light'>{user?.name}</td>
                                    <td className='bg-light'>{user?.username}</td>
                                    <td className='bg-light'>{user?.email}</td>
                                    <td className='bg-light text-center'>
                                        <Link to={`/users/view/${user?.id}`} className="btn btn-light" ><GrView size="18px" /></Link>
                                        <Link to={`/users/edit/${user?.id}`} className="btn btn-light text-primary" ><TbEdit size="18px" /></Link>
                                        <button onClick={() => deleteUser(user?.id)} className="btn btn-light text-danger"><RiDeleteBin6Line size="18px" /></button>
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