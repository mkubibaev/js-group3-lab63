import React from 'react';
import Button from "../UI/Button/Buttons";

const Post = props => {
	const postDate = new Date(props.datetime);
	const formattedDate = postDate.toLocaleString('ru-Ru');

	return (


		<div className="card">
			<div className="card-header">
				<span>Created on: {formattedDate}</span>
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

				{/*<button type="button" onClick={props.clicked} className="btn btn-info">Read more</button>*/}
			</div>
		</div>
	);
};

export default Post;

