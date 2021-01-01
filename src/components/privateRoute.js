import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest}) {

    const dispatch = useDispatch()
    const routeRequest = useSelector(state => state.router.location.pathname)
    const currentUser = useSelector(state => state.user.currentUser)
    dispatch({type: 'NEW_REQUEST', payload: routeRequest})
    
    return (
        <Route
            {...rest}
            render={ props => {
                return currentUser.id ? <Component {...props} /> : <Redirect to='/login'/>
            }

            }>
        </Route>
    )
}