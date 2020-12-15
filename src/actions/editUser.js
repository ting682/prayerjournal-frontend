import { BASEURL } from './url'

export function editUser(user, currentUserId, history) {
    return (dispatch) => {
      dispatch({ type: 'START_EDIT_PROFILE' });
        debugger
      fetch(`${BASEURL}/api/v1/users/${currentUserId}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://localhost:3001'
        },

        body: JSON.stringify({
            user
        })
        })
        .then(response => response.json())
        .then(userData => { 
            //debugger
            dispatch({ type: 'EDIT_PROFILE', payload: { 
                email: userData.data.attributes.email_address,
                bio: userData.data.attributes.bio,
                name: userData.data.attributes.name
            }})
            
            history.push('/users')
        })
    };
  }