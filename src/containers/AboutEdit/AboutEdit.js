import React, {Component} from 'react';
import AboutForm from "../../components/AboutForm/AboutForm";
import axios from "../../axios-posts";

class AboutEdit extends Component {

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

    valueChanged = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    };

    editAbout = event => {
        event.preventDefault();
        const newAboutText = this.state;

        axios.put('/about.json', newAboutText).finally(() => {
            this.props.history.push('/about');
        });

    };

    render() {
        return (
            <div className="container">
                <h3 className="text-center my-3">Edit about</h3>
                <AboutForm
                    submited={this.editAbout}
                    text={this.state.text}
                    changed={this.valueChanged}
                />
            </div>
        );
    }
}

export default AboutEdit;