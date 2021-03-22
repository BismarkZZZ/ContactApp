const initialState = {
    contacts: [
        {
            name: 'Meeky Pangbe',
            email: 'meeky@mail.com',
            gender: 'Male',
            phone: '02465637392',
            id: "u383894v2bh"
        },
    ]
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return { ...state, contacts: [...state.contacts, action.payload]};

        case "DELETE_CONTACT":
            let undeletedContacts = state.contacts.filter(contacts => contacts.id !== action.payload)
            return {...state, contacts: undeletedContacts};

        case "EDIT_CONTACT":
            return {...state, contacts: state.contacts.map(contacts => contacts.id === action.payload.id ? action.payload : contacts),};

        default:
            return state;
    }
}

export default contactsReducer;