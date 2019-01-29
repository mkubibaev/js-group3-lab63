import React, {Component} from 'react';
import axios from '../../axios-posts';

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

		const post = {...this.state};
		console.log(post);

		axios.put('/posts/' + this.id + '.json', post).finally(() => {
			this.props.history.push('/');
		});
	};

	render () {
		return (
			<div className="container py-3">
				<h3 className="text-center mb-3">Edit post</h3>
				<form onSubmit={this.editPost}>
					<div className="form-group mb-3">
						<label>Post title:</label>
						<input type="text"
							   className="form-control"
							   name="title"
							   value={this.state.title}
							   onChange={this.valueChanged}
						/>
					</div>
					<div className="form-group">
						<label>Post content:</label>
						<textarea className="form-control"
								  name="content"
								  value={this.state.content}
								  onChange={this.valueChanged}
						/>
					</div>
					<div className="form-group text-right">
						<button type="submit" className="btn btn-info">Save</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Edit;