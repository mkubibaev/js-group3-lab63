import React from 'react';

const ContactsForm = props => {
    return (
        <form onSubmit={props.submited}>
            <div className="form-group mb-3">
                <input
                    className="form-control"
                    name="address"
                    value={props.address}
                    onChange={props.changed}
                />
            </div>
            <div className='form-group mb-3'>
                <input
                    className="form-control"
                    name="phone"
                    value={props.phone}
                    onChange={props.changed}
                />
            </div>
            <div className='form-group'>
                <input
                    className="form-control"
                    name="email"
                    value={props.email}
                    onChange={props.changed}
                />
            </div>
            <div className="form-group text-right">
                <button type="submit" className="btn btn-info">Save</button>
            </div>
        </form>
    );
};

export default ContactsForm;