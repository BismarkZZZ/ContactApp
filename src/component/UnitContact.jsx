import React, {useState} from 'react';
import { Button, Card, Col, Modal } from 'react-bootstrap';
import EditContact from './EditContact';
import {connect} from "react-redux";
import { deleteContact } from "../actions/contactActions";


function UnitContact(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (e) => {
        e.preventDefault();
        props.deleteContact(props.contactInfo.id);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditContact contactInfo={props.contactInfo} editContact={props.editContact} closeModal={handleClose}/>
                </Modal.Body>
            </Modal>

            <Col   style={{ marginBottom: '1rem' }}>
                <div>
                    <Card>
                        <Card.Body>
                            <Card.Title>Name: {props.contactInfo.name} </Card.Title>
                            <Card.Text>
                                <p>Email: {props.contactInfo.email}</p>
                                <p>Gender: {props.contactInfo.gender}</p>
                                <p>Phone: {props.contactInfo.phone}</p>
                            </Card.Text>
                            <Button href="#" md='4' size="sm" onClick={handleShow}>Edit</Button>
                            &nbsp;
                            &nbsp;
                            <Button href="#" variant="danger" size="sm" onClick={handleDelete}>Delete</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        </>
    )
}

const mapDispatchToProps = {
    deleteContact
}

export default connect(null, mapDispatchToProps) (UnitContact);