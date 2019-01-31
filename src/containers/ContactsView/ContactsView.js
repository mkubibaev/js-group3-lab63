import React, {Component} from 'react';
import Contacts from "../../components/Contacts/Contacts";
import axios from "../../axios-posts";

class ContactsView extends Component {

    state = {
          contacts: {}
    };

    componentDidMount() {
        console.log(this.state);

        axios.get('/contacts.json').then(response => {
            this.setState({contacts: response.data})
        }).catch(error => {
            console.log(error);
        })
    }

    goToEditContacts = () => {
        this.props.history.push({
            pathname: '/contacts/edit'
        })
    };

    render() {
        return (
            <Contacts
                address={this.state.contacts.address}
                phone={this.state.contacts.phone}
                email={this.state.contacts.email}
                clicked={this.goToEditContacts}
            />
        );
    }
}

export default ContactsView;