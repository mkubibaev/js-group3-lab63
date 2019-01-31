import React from 'react';

const AboutForm = props => {
    return (
        <form onSubmit={props.submited}>
            <div className="form-group">
                <textarea
                    className="form-control"
                    name="text"
                    value={props.text}
                    onChange={props.changed}
                />
            </div>
            <div className="form-group text-right">
                <button type="submit" className="btn btn-info">Save</button>
            </div>
        </form>
    );
};

export default AboutForm;