import React from 'react';

const Post = props => {
	return (
		<div className="card">
			<div className="card-header">
				<span>Created on: {props.datetime}</span>
			</div>
			<div className="card-body">
				<h4 className="card-title">{props.title}</h4>
			</div>
			<div className="card-footer">
				<button type="button" className="btn btn-info">Read more</button>
			</div>
		</div>
	);
};

export default Post;