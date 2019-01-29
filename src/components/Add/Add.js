import React, {Component} from 'react';
import axios from '../../axios-posts';

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
				<form onSubmit={this.addPost}>
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

};

export default Add;