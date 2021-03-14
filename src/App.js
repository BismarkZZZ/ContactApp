import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllContact from './component/AllContact';
import { Component } from 'react';
import AddContact from './component/AddContact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: 'Meeky Pangbe',
          email: 'meeky@mail.com',
          gender: 'Male',
          phone: '02465637392',
          id: "u383894v2bh"
        },
        {
          name: 'Newton Tamps',
          email: 'Newton@mail.com',
          gender: 'Male',
          phone: '02478362893',
          id: "jh387b3738"
        },
        {
          name: 'Olina Yanks',
          email: 'Olina@mail.com',
          gender: 'Female',
          phone: '05647399372',
          id: "79842gu82"
        },
      ]
    }
  }
  addNewContact = (contacts) => {
    contacts.id = Math.random().toString();
    this.setState({
      contacts: [...this.state.contacts, contacts]
    })
  }
  deleteContact = (id) => {
    let undeletedContacts = this.state.contacts.filter(contacts => contacts.id !== id)
    this.setState({
      contacts: undeletedContacts
    })
  }
  editContact = (id, updatedContact) => {
    this.setState({
      contacts: this.state.contacts.map(contacts => contacts.id === id ? updatedContact : contacts)
    })
  }
  render() {
    return (
      <Container fluid style={{ marginTop: '2rem' }}>
        <Row>
          <Col md='4'>
            <h3>New Contact</h3>
            <AddContact addContact={this.addNewContact} />
          </Col>
          <Col>
            <h3>Contact Page</h3>
            <AllContact
              contactsData={this.state.contacts}
              deleteContact={this.deleteContact}
              editContact={this.editContact}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
