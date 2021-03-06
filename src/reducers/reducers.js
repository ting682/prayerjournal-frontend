import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { entriesReducer } from './entriesReducer'
import { loginReducer } from "./loginReducer";
import { userReducer } from './userReducer'
import { signupReducer } from "./signupReducer";
import { alertsReducer } from './alertsReducer'
import { routeRequestReducer } from './routeRequestReducer'
import { verseReducer } from "./verseReducer";
import { bibleSearchReducer } from './bibleSearchReducer'
import { blogsReducer } from './blogsReducer'
import { blogReducer } from './blogReducer'

export const rootReducer = (history) => combineReducers({
    loggedIn: !!loginReducer.currentUser,
    router: connectRouter(history),
    entries: entriesReducer,
    user: loginReducer,
    users: userReducer,
    signupUser: signupReducer,
    alerts: alertsReducer,
    routeRequest: routeRequestReducer,
    verse: verseReducer,
    bibleSearchReducer,
    blogs: blogsReducer,
    blog: blogReducer
  });



