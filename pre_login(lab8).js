import React, { useState, useEffect } from 'react';

const predefinedUsers = [
  { email: 'shivani@gmail.com', password: 'sh20111' },
  { email: 'user@example.com', password: 'user123' }
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session === 'active') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const validUser = predefinedUsers.find(
      user => user.email === email && user.password === password
    );

    if (validUser) {
      setIsLoggedIn(true);
      localStorage.setItem('session', 'active');
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('session');
  };

  if (isLoggedIn) {
    return (
      <div style={styles.container}>
        <h2>Welcome</h2>
        <p>You are logged in as <b>{email}</b></p>
        <button onClick={handleLogout} style={styles.button}>Logout</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Arial'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Login;
//App.js
// import React from 'react';
// import Login from './Login'; 

// function App() {
//   return (
//     <div>
//       <Login />
//     </div>
//   );
// }

// export default App;
