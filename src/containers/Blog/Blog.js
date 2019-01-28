import React, {Component, Fragment} from 'react';

class Blog extends Component {

    componentDidMount() {
        console.log('post');
    }


    render() {
        return (
            <Fragment>
                <h1>Home</h1>
            </Fragment>
        );
    }
}

export default Blog;