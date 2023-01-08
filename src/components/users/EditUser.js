import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        loadUser();
    }, [])

    const onSubmit = async e => {
        e.preventDefault();

        await axios.put(`http://localhost:3003/users/${id}`, user);
        navigate("/")
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data)
    }

    return (
        <div className="container">
            <h1>Edit User</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className="row mb-3 form-group">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-lg" value={name}
                            onChange={e => onInputChange(e)}
                            placeholder="Enter Your Name" name="name" />
                    </div>
                </div>
                <div className="row mb-3 form-group">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">User Name</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-lg" value={username} onChange={e => onInputChange(e)} placeholder="Enter Your User Name" name="username" />
                    </div>
                </div>
                <div className="row mb-3 form-group">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-8">
                        <input type="email" className="form-control form-control-lg" value={email} onChange={e => onInputChange(e)} placeholder="Enter Your Email" name="email" />
                    </div>
                </div>
                <div className="row mb-3 form-group">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-lg" value={phone} onChange={e => onInputChange(e)} placeholder="Enter Your Phone" name="phone" />
                    </div>
                </div>
                <div className="row mb-3 form-group">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Website</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-lg" value={website} onChange={e => onInputChange(e)} placeholder="Enter Your website" name="website" />
                    </div>
                </div>
                <button type="submit" className="btn btn-warning btn-block">Update User</button>
            </form>
        </div>

    )
}
export default EditUser;