//action creator for adding contact
export const addContact = (newContact) => {
    newContact.id = Math.random().toString();
    return {
        type: "ADD_CONTACT",
        payload: newContact
    }
}

//action creator for deleting contact
export const deleteContact = (contactId) => {
    return {
        type: "DELETE_CONTACT",
        payload: contactId
    }
}

//action creator for editing contact
export const editContact = (updatedContact) => {
    return {
        type: "EDIT_CONTACT",
        payload: updatedContact
    }
}