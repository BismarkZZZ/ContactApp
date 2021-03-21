import {createStore, combineReducers} from "redux";
import contactReducer from "../reducers/contactsReducer";
import authReducer from "../reducers/authReducer";

export const store = createStore (
    combineReducers ({
        contactsState: contactReducer,
        auth: authReducer,
    })
);