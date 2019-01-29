import React from 'react';

const FullPost = props => {
	const postDate = new Date(props.datetime);
	const formattedDate = postDate.toLocaleString('ru-Ru');

	return (
		<div className="card">
			<div className="card">
				<div className="card-header">
					<span>Created on: {formattedDate}</span>
				</div>
				<div className="card-body">
					<h4 className="card-title">{props.title}</h4>
					<p>{props.content}</p>
				</div>
				<div className="card-footer text-right">
					<button type="button" className="btn btn-info">Edit</button>
					<button type="button" className="btn btn-info">Delete</button>
				</div>
			</div>
		</div>
	);
};

export default FullPost;