import React, {Component} from 'react';
import Contacts from "../../components/Contacts/Contacts";
import axios from "../../axios-posts";

class ContactsView extends Component {

    state = {
		address: '',
		phone: '',
		email: ''
    };

    componentDidMount() {
        axios.get('/contacts.json').then(response => {
			const {address, phone, email} = response.data;
            this.setState({address, phone, email})
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
                address={this.state.address}
                phone={this.state.phone}
                email={this.state.email}
                clicked={this.goToEditContacts}
            />
        );
    }
}

export default ContactsView;