import React from 'react';

const Button = props => {
	const buttonClasses = ['btn'];
	buttonClasses.push('btn-' + props.type);

	return (
		<button
			type="button"
			className={buttonClasses.join(' ')}
			onClick={props.clicked}
		>
			{props.label}
		</button>
	);
};

export default Button;