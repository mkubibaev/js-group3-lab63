import React, {Component} from 'react';
import axios from "../../axios-posts";
import ContactsForm from "../../components/ContactsForm/ContactsForm";

class ContactsEdit extends Component {

    state = {
        address: '',
        phone: '',
        email: ''
    };

    componentDidMount () {
        axios.get('/contacts.json' ).then(response => {
            this.setState({
                address:  response.data.address,
                phone: response.data.phone,
                email: response.data.email
            })
        })
    }

    valueChanged = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    };

    editContacts = event => {
        event.preventDefault();

        axios.put('/contacts.json', this.state).finally(() => {
            this.props.history.push('/contacts');
        });
    };

    render() {
        return (
            <div className="container">
                <h3 className="text-center my-3">Edit contacts</h3>
                <ContactsForm
                    submited={this.editContacts}
                    address={this.state.address}
                    phone={this.state.phone}
                    email={this.state.email}
                    changed={this.valueChanged}
                />
            </div>
        );
    }
}

export default ContactsEdit;