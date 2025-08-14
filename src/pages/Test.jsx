import axios from 'axios'
import { useEffect, useState } from 'react'



function Test() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data)
            })
            .catch(error => {
                console.error('Error fetching users:', error)
            })
    }, [])
  return (
    <div>
        <ul>
      {users.map(user => <li key={user.id}>{user.name}-{user.email}-{user.address.city}</li>)}
    </ul>
    </div>
  )
}



export default Test