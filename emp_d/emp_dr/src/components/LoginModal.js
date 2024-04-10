import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Link } from 'react-router-dom';
// import { useUser } from '../components/UserContext';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  // const { setUser } = useUser();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3002/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return response.json(); // Assuming your server responds with JSON
    })
    .then(data => {
      alert('Login successful!');
      // setUser({ email: email }); // Store the user's email in the context
      navigate('/home'); // Navigate to the dashboard or wherever you need
    })
    .catch((error) => {
      console.error('Error:', error);
      alert(error.message);
    });
  };

  return (
    
<div className='homepage-background2'>
    <div className="modal-background">
      <div className='welLog'>
      
      <h2 style={{ color: 'white' }} >Welcome <br></br>Login to your account</h2>
      </div>
      <div className="modal-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-label">
            <span>Email</span>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="form-label">
            <span>Password</span>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button type="submit" className="submit-button">Login</button>
          <br />
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginModal;
