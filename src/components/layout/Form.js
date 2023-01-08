// npm package
import React from "react";

/**
 * Method to handle the form data.
 * @param {object} param0, param2, 
 * @param {fuction} param1, param4, 
 * @param {string} param3
 * @returns node
 */
const Form = ({ user, onSubmit, formErrors, id, setUser }) => {

    // Destructuring user's data.
    const { name, username, email, phone, website } = user;

    /**
     * Methoid to handle the input change.
     * @param {string} param0 , param1
     */
    const onInputChange = ({ target: { value = '', name = '' } }) => {
        setUser({ ...user, [name]: value });
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            {/* Name */}
            <div className="row mb-3 form-group">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        className="form-control form-control-md"
                        value={name}
                        onChange={e => onInputChange(e)}
                        placeholder="emnter your name" name="name"
                    />
                    <span className="frm-val-error">{formErrors?.name}</span>
                </div>
            </div>
            {/* User Name */}
            <div className="row mb-3 form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">User Name</label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        className="form-control form-control-md"
                        value={username} onChange={e => onInputChange(e)}
                        placeholder="enter your user name"
                        name="username"
                    />
                    <span className="frm-val-error">{formErrors?.username}</span>
                </div>
            </div>
            {/* Email */}
            <div className="row mb-3 form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        className="form-control form-control-md"
                        value={email} onChange={e => onInputChange(e)}
                        placeholder="enter your email" name="email"
                    />
                    <span className="frm-val-error">{formErrors?.email}</span>
                </div>
            </div>
            {/* Phone */}
            <div className="row mb-3 form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        className="form-control form-control-md"
                        value={phone} onChange={e => onInputChange(e)}
                        placeholder="enter your phone"
                        name="phone"
                    />
                    <span className="frm-val-error">{formErrors?.phone}</span>
                </div>
            </div>
            {/* Website */}
            <div className="row mb-3 form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Website</label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        className="form-control form-control-md"
                        value={website} onChange={e => onInputChange(e)}
                        placeholder="enter your website"
                        name="website"
                    />
                    <span className="frm-val-error">{formErrors?.website}</span>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">{id ? 'Update user' : 'Add user'}</button>
        </form>
    )
}
export default Form;