import React, {Component, Fragment} from 'react';
import axios from '../../axios-posts';
import Post from "../../components/Post/Post";

class Blog extends Component {

    state = {
        posts: []
    };


    componentDidMount() {
        axios.get('/posts.json').then(response => {
            const posts = [];
			Object.keys(response.data).forEach(key =>{
			    response.data[key].id = key;
				posts.push(response.data[key])
			});

			this.setState({posts});
		}).catch(error => {
			console.log(error);
		})

    }


    render() {
        return (
            <Fragment>
                <div className="container py-4">
                    {this.state.posts.map(post => (
                        <Post
                            key={post.id}
                            title={post.title}
                            datetime={post.datetime}
                        />
                    ))}
				</div>
            </Fragment>
        );
    }
}

export default Blog;