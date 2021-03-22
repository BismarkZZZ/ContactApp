import React, { Component } from 'react'
import {Button, Form } from 'react-bootstrap'
import {connect} from "react-redux"
import {editContact} from "../actions/contactActions"

class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.contactInfo.name,
            email: props.contactInfo.email,
            gender: props.contactInfo.gender,
            phone: props.contactInfo.phone,
            id: props.contactInfo.id
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editContact(this.state);
        this.setState({
           name: "",
           email: "",
           gender: "",
           phone: "",
           id: ""
        })
        this.props.closeModal();
    };

    render() {
        return (
            <div> 
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="name" onChange = {this.handleChange} value={this.state.name} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange = {this.handleChange} value={this.state.email} />
                    </Form.Group>
                    <Form.Group controlId="formGender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" name="gender" onChange = {this.handleChange}value={this.state.gender}>
                        <option disabled selected />
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter phone number" name="phone" onChange = {this.handleChange} value={this.state.phone} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    editContact
}

export default connect(null, mapDispatchToProps) (EditContact);