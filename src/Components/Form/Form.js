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
    const { name, username, email, phone, website } = user || {};

    /**
     * Methoid to handle the input change.
     * @param {string} param0 , param1
     */
    const onInputChange = ({ target: { value = '', name = '' } }) => {
        setUser({ ...user, [name]: value.trimStart() });
    }

    return (
        <form onSubmit={onSubmit}>
            {/* Name */}
            <div className="row mb-3 form-group">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        className="form-control form-control-md"
                        value={name || ''}
                        onChange={onInputChange}
                        placeholder="Enter your name" name="name"
                    />
                    <span className="text-danger">{formErrors?.name}</span>
                </div>
            </div>
            {/* User Name */}
            <div className="row mb-3 form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">User Name</label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        className="form-control form-control-md"
                        value={username || ''} onChange={onInputChange}
                        placeholder="Enter your user name"
                        name="username"
                    />
                    <span className="text-danger">{formErrors?.username}</span>
                </div>
            </div>
            {/* Email */}
            <div className="row mb-3 form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        className="form-control form-control-md"
                        value={email || ''} onChange={onInputChange}
                        placeholder="Enter your email" name="email"
                    />
                    <span className="text-danger">{formErrors?.email}</span>
                </div>
            </div>
            {/* Phone */}
            <div className="row mb-3 form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        className="form-control form-control-md"
                        value={phone || ''} onChange={onInputChange}
                        placeholder="Enter your phone"
                        name="phone"
                    />
                    <span className="text-danger">{formErrors?.phone}</span>
                </div>
            </div>
            {/* Website */}
            <div className="row mb-3 form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Website</label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        className="form-control form-control-md"
                        value={website || ''} onChange={onInputChange}
                        placeholder="Enter your website"
                        name="website"
                    />
                    <span className="text-danger">{formErrors?.website}</span>
                </div>
            </div>
            <button type="submit" disabled={!name || !email} className="btn btn-secondary btn-block">{id ? 'Update user' : 'Add user'}</button>
        </form>
    )
}
export default Form;