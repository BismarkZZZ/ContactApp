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
            return {

            };
        default:
            return state;
    }
}

export default contactsReducer;