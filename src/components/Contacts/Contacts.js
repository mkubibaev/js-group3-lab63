import React from 'react';

const Contacts = props => {
    return (
        <div className='container'>
            <h3 className='my-3'>Contacts</h3>
            <p>{props.address}</p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <div className="text-right">
                <button onClick={props.clicked} type="button" className="btn btn-info">Edit</button>
            </div>
        </div>
    );
};

export default Contacts;