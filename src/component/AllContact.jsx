import React from 'react'
import { Container, Row } from 'react-bootstrap'
import UnitContact from './UnitContact'
import {connect} from "react-redux"


const AllContact = (props) => {
    return (
        <Container>
            <Row>
                {
                    props.contactsData.map((contact) => {
                        return (
                            <UnitContact contactInfo={contact}
                                key={contact.id}
                                
                                
                            /> 
                        ) 
                     })
                }

            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    contactsData: state.contactsState.contacts
})
export default connect(mapStateToProps)(AllContact);