import React from 'react';

const PostForm = props => {
	return (
		<form onSubmit={props.submited}>
			<div className="form-group mb-3">
				<label>Post title:</label>
				<input type="text"
					   className="form-control"
					   name="title"
					   value={props.title}
					   onChange={props.changed}
				/>
			</div>
			<div className="form-group">
				<label>Post content:</label>
				<textarea className="form-control"
						  name="content"
						  value={props.content}
						  onChange={props.changed}
				/>
			</div>
			<div className="form-group text-right">
				<button type="submit" className="btn btn-info">Save</button>
			</div>
		</form>
	);
};

export default PostForm;