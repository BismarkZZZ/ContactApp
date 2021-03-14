import React from 'react'
import { Container, Row } from 'react-bootstrap'
import UnitContact from './UnitContact'

const AllContact = (props) => {
    return (
        <Container>
            <Row>
                {
                    props.contactsData.map((contact) => {
                        return (
                            <UnitContact contactInfo={contact}
                                key={contact.id}
                                deleteContact={props.deleteContact}
                                editContact={props.editContact}
                            /> 
                        ) 
                     })
                }

            </Row>
        </Container>
    )
}

export default AllContact;