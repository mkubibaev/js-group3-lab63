import React, {Component} from 'react';
import axios from '../../axios-posts';
import About from "../../components/About/About";

class AboutView extends Component {

    state = {
        text: ''
    };

    componentDidMount() {
        axios.get('/about.json').then(response => {
            this.setState({text: response.data.text})
        }).catch(error => {
            console.log(error);
        })
    }

    goToEditAbout = () => {
        this.props.history.push({
            pathname: '/about/edit'
        })
    };

    render() {
        return (
            <About
                text={this.state.text}
                editLink={this.goToEditAbout}
            />
        );
    }
}

export default AboutView;