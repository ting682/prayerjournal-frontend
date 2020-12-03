import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { entriesReducer } from './entriesReducer'
import { loginReducer } from "./loginReducer";

export const rootReducer = (history) => combineReducers({
    
    router: connectRouter(history),
    entries: entriesReducer,
    user: loginReducer
  });



