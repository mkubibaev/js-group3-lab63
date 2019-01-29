import React, {Component} from 'react';
import axios from '../../axios-posts';
import Post from "../Post/Post";

class FullPost extends Component {
	state = {
		post: {}
	};

	id = this.props.match.params.id;

	componentDidMount() {
		axios.get('/posts/' + this.id + '.json').then(response => {
			this.setState({post: response.data})
		})
	}

	goToEditPost = () => {
		this.props.history.push({
			pathname: '/posts/' + this.id + '/edit'
		})
	};

	deletePost = () => {
		if (window.confirm('Are you sure?')) {
			axios.delete('/posts/' + this.id + '.json').finally(() => {
				this.props.history.push('/');
			});
		}

	};

	render() {

		return (
			<div className="container py-3">
				<Post
					title={this.state.post.title}
					created={this.state.post.created}
					updated={this.state.post.updated}
					content={this.state.post.content}
					buttons={
						[
							{type: 'secondary', label: 'Edit', clicked: () => {this.goToEditPost()}},
							{type: 'danger', label: 'Delete', clicked: () => {this.deletePost()}}
						]
					}
				/>
			</div>
		);
	}

};

export default FullPost;