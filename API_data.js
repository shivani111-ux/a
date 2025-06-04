import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Component mounted - Fetching data");

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
        console.log("Data loaded");
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });

    return () => {
      console.log("Component will unmount");
    };
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id} style={{ marginBottom: '1rem' }}>
          <strong>Name:</strong> {user.name}<br />
          <strong>Email:</strong> {user.email}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
//App.js
import React from 'react';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <UserList />
    </div>
  );
}

 export default App;

