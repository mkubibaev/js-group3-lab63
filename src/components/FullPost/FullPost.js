import React, {Component} from 'react';
import axios from '../../axios-posts';
import Post from "../Post/Post";

class FullPost extends Component {
	state = {
		post: {}
	};


	componentDidMount() {
		axios.get('/posts/' + this.props.match.params.id + '.json').then(response => {;
			this.setState({post: response.data})
		})
	}

	deletePost = () => {
		if (window.confirm('Are you sure?')) {
			axios.delete('/posts/' + this.props.match.params.id + '.json').finally(() => {
				this.props.history.push('/');
			});
		}

	};

	render() {

		return (
			<div className="container py-3">
				<Post
					title={this.state.post.title}
					datetime={this.state.post.datetime}
					content={this.state.post.content}
					buttons={
						[
							{type: 'secondary', label: 'Edit', clicked: () => {console.log('Edit')}},
							{type: 'danger', label: 'Delete', clicked: () => {this.deletePost()}}
						]
					}
				/>
			</div>
		);
	}

};

export default FullPost;