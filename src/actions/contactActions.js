//action creator for adding contact
export const addContact = (newContact) => {
    newContact.id = Math.random().toString();
    return {
        type: "ADD_CONTACT",
        payload: newContact
    }
}
