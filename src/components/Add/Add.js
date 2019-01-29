import React, {Component} from 'react';
import axios from '../../axios-posts';
import PostForm from "../PostForm/PostForm";

class Add extends Component {

    state = {
        title: '',
        content: ''
    };

	valueChanged = (event) => {
		const name = event.target.name;
		this.setState({[name]: event.target.value});
	};

    addPost = event => {
        event.preventDefault();

		if (this.state.title !== '' && this.state.content !== '') {

			const date = new Date();
			const post = {
				title: this.state.title,
				content: this.state.content,
				datetime: date.toISOString(),
			};

			axios.post('/posts.json', post).then(() => {
			    this.setState({title: '', content: ''});
            }).finally(() => {
				this.props.history.push('/');
			});
        } else {
            alert('All fields required!');
        }

    };

	render () {
		return (
			<div className="container py-3">
				<h3 className="text-center mb-3">Add new post</h3>
				<PostForm
					submited={this.addPost}
					title={this.state.title}
					content={this.state.content}
					changed={this.valueChanged}
				/>
			</div>
		);
    }

};

export default Add;