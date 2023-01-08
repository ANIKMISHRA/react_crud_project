import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";


const AddUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const {name, username, email, phone, website} = user;

    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value});
    }

    const onSubmit = async e => {
        e.preventDefault();

        setFormErrors(validate(user));
        setIsSubmit(true);
    }

    useEffect( async (e) => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            await axios.post("http://localhost:3003/users", user);
            navigate("/")
        }

    },[formErrors])

    const validate = (users) => {
        
        const errors = {}
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (!users.name){
            errors.name = "Name is required!";
        }
        if(!users.username){
            errors.username = "Username is required!";
        }
        if(!users.email){
            errors.email = "Email is required!";
        } 
        else if (!regex.test(users.email)){
            errors.email = "This is not a valid email!";
        }
        if(!users.phone){
            errors.phone = "Phone is required!";
        }
        if(!users.website){
            errors.website = "Website is required!";
        }
        return errors;
    }
    return (
        <div className="container">
            <h1>Add User</h1>
         <form onSubmit={e => onSubmit(e)}>
            <div className="row mb-3 form-group">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-8">
                <input type="text" className="form-control form-control-lg" value={name}
                onChange = { e => onInputChange(e)}
                 placeholder="Enter Your Name" name="name"/>
                <span className="frm-val-error">{formErrors.name}</span>
                </div>
            </div>
            <div className="row mb-3 form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">User Name</label>
                <div className="col-sm-8">
                <input type="text" className="form-control form-control-lg" value={username} onChange = { e => onInputChange(e)} placeholder="Enter Your User Name" name="username"/>
                <span className="frm-val-error">{formErrors.username}</span>
                </div>
                
            </div>
            <div className="row mb-3 form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-8">
                <input type="text" className="form-control form-control-lg" value={email} onChange = { e => onInputChange(e)} placeholder="Enter Your Email" name="email"/>
                <span className="frm-val-error">{formErrors.email}</span>

                </div>
            </div>
            <div className="row mb-3 form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-8">
                <input type="text" className="form-control form-control-lg" value={phone} onChange = { e => onInputChange(e)} placeholder="Enter Your Phone" name="phone"/>
                <span className="frm-val-error">{formErrors.phone}</span>

                </div>
            </div>
            <div className="row mb-3 form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Website</label>
                <div className="col-sm-8">
                <input type="text" className="form-control form-control-lg" value={website} onChange = { e => onInputChange(e)} placeholder="Enter Your website" name="website"/>
                <span className="frm-val-error">{formErrors.website}</span>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Add User</button>
            </form>
        </div>
       
    )
}
export default AddUser;