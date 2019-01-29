import React from 'react';
import Button from "../UI/Button/Buttons";

const Post = props => {
	const postCreated = new Date(props.created);
	const formattedCreateDate = postCreated.toLocaleString('ru-Ru');
	let formattedUpdateDate = null;

	if (props.updated) {
		const postUpdated = new Date(props.updated);
		formattedUpdateDate = postUpdated.toLocaleString('ru-Ru');
	}

	return (


		<div className="card">
			<div className="card-header">
				<div>Created on: {formattedCreateDate}</div>
				{formattedUpdateDate && <div>Updated on: {formattedUpdateDate}</div>}
			</div>
			<div className="card-body">
				<h4 className="card-title">{props.title}</h4>
				{props.content && <p>{props.content}</p>}
			</div>
			<div className="card-footer text-right">
				{props.buttons.map(button => (
					<Button
						key={button.label}
						type={button.type}
						label={button.label}
						clicked={button.clicked}
					/>
				))}
			</div>
		</div>
	);
};

export default Post;

