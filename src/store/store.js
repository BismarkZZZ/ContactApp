import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import contactReducer from "../reducers/contactsReducer";
import authReducer from "../reducers/authReducer";
import {getFirebase, reactReduxFirebase} from "react-redux-firebase";
import { getFirestore, reduxFirestore} from "redux-firestore";
import firebase from "../firebase/firebase";

const reducers = combineReducers ({
    contactsState: contactReducer,
    auth: authReducer,
})

export const store = createStore (
    reducers,
    compose (
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(firebase),
        reduxFirestore(firebase),
    )
);