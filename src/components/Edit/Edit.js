import React, {Component} from 'react';
import axios from '../../axios-posts';
import PostForm from "../PostForm/PostForm";

class Edit extends Component {
	state = {
		title: '',
		content: ''
	};

	id = this.props.match.params.id;

	componentDidMount() {

		axios.get('/posts/' + this.id + '.json' ).then(response => {
			this.setState({
				title:  response.data.title,
				content: response.data.content
			})
		})
	}

	valueChanged = (event) => {
		const name = event.target.name;
		this.setState({[name]: event.target.value});
	};

	editPost = event => {
		event.preventDefault();

		axios.put('/posts/' + this.id + '.json', this.state).finally(() => {
			this.props.history.push('/');
		});
	};

	render () {
		return (
			<div className="container py-3">
				<h3 className="text-center mb-3">Edit post</h3>
				<PostForm
					submited={this.editPost}
					title={this.state.title}
					content={this.state.content}
					changed={this.valueChanged}
				/>
			</div>
		);
	}
}

export default Edit;