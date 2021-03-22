import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllContact from './component/AllContact';
import { Component } from 'react';
import AddContact from './component/AddContact';

class App extends Component {
  
  // addNewContact = (contacts) => {
  //   contacts.id = Math.random().toString();
  //   this.setState({
  //     contacts: [...this.state.contacts, contacts]
  //   })
  // }

  // deleteContact = (id) => {
  //   let undeletedContacts = this.state.contacts.filter(contacts => contacts.id !== id)
  //   this.setState({
  //     contacts: undeletedContacts
  //   })
  // }

  // editContact = (id, updatedContact) => {
  //   this.setState({
  //     contacts: this.state.contacts.map(contacts => contacts.id === id ? updatedContact : contacts)
  //   })
  // }

  render() {
    return (
      <Container fluid style={{ marginTop: '2rem' }}>
        <Row>
          <Col md='4'>
            <h3>New Contact</h3>
            <AddContact addContact={this.addContact}/>
          </Col>
          <Col>
            <h3>Contact Page</h3>
            <AllContact
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
