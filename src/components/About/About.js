import React from 'react';

const About = props => {
    return (
        <div className='container'>
            <h3 className='my-3 text-center'>About blog</h3>
            <p>{props.text}</p>
            <div className="text-right">
                <button onClick={props.editLink} type="button" className="btn btn-info">Edit</button>
            </div>
        </div>
    );
};

export default About;