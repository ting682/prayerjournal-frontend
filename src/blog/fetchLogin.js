export function fetchLogin(data) {
    fetch('http://localhost:3000/api/v1/login', {
            
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    email_address: data.email,
                    password: data.password

                }
            })
        })
        return {
            type: 'GET_CURRENT_USER', payload: {
                user: {
                    userId,
                    bio,
                    name
                }
            }
            
        }
}
