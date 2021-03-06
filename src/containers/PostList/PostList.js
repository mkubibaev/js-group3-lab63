import React, {Component, Fragment} from 'react';
import axios from '../../axios-posts';
import Post from "../../components/Post/Post";

class PostList extends Component {

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

    showFullPost = id => {
		this.props.history.push({
			pathname: '/posts/' + id
		})
    };

    render() {
        return (
            <Fragment>
                <div className="container py-4">
                    {this.state.posts.map(post => (
                        <Post
                            key={post.id}
                            title={post.title}
                            created={post.created}
							updated={post.updated}
							buttons={
							    [
									{type: 'info', label: 'Read more', clicked: () => {this.showFullPost(post.id)}}
								]
							}
                        />
                    ))}
				</div>
            </Fragment>
        );
    }
}

export default PostList;