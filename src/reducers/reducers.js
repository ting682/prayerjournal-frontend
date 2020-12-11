import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { entriesReducer } from './entriesReducer'
import { loginReducer } from "./loginReducer";
import { userReducer } from './userReducer'
import { signupReducer } from "./signupReducer";

export const rootReducer = (history) => combineReducers({
    loggedIn: !!loginReducer.currentUser,
    router: connectRouter(history),
    entries: entriesReducer,
    user: loginReducer,
    users: userReducer,
    signupUser: signupReducer
  });



