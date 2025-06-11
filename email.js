import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message,
      title: "Contact Form Submission"
    };

    emailjs.send(
      'service_fqo6lyh',
      'template_o2ohffy',
      templateParams,
      'oPqedRbXNFKTzSBBZ'
    )
      .then((result) => {
        alert('Your message has been sent!');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        alert(' Something went wrong. Please try again.');
        console.error(error.text);
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form onSubmit={sendEmail} style={styles.form}>
        <label style={styles.label}>Full Name</label>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          placeholder="Enter your full name"
        />

        <label style={styles.label}>Email Address</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          placeholder="Enter your email"
        />

        <label style={styles.label}>Message</label>
        <textarea
          rows="5"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
          placeholder="Write your message here..."
        />

        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff'
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    marginBottom: '5px',
    color: '#555',
    fontWeight: 'bold'
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '6px'
  },
  textarea: {
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    resize: 'none'
  },
  button: {
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default ContactForm;
//App.js
// import React from 'react';
// import Lab7 from './Lab7';

// function App() {
//   return (
//     <div className="App">
//       <Lab7 />
//     </div>
//   );
// }

// export default App;

