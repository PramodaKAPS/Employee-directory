import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import * as yup from 'yup'; // Import yup
import  '../App.css';


const signupSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().matches(/^(?=.*[!@#$%^&*])/, 'Password must contain a symbol').min(8, 'Password must be at least 8 characters long').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirming your password is required'),
  agreeTerms: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});



const SignupModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate(); 

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleAgreeTermsChange = (e) => setAgreeTerms(e.target.checked);

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      // Validate form data against the schema
      await signupSchema.validate({ email, password, confirmPassword, agreeTerms }, { abortEarly: false });

      // Proceed with form submission upon successful validation
      // Your fetch call to the backend goes here
      alert('Signup successful!');
      navigate('/home'); // Navigate to the homepage or dashboard
    } catch (error) {
      // Handle validation errors
      console.error('Validation errors:', error);
      alert(error.errors); // Show validation errors
    }

    const userData = { email, password, confirmPassword };

    fetch('http://localhost:3002/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Signup failed');
      }
      return response.text(); // or .json() if your server responds with JSON
    })
    .then(() => {
      alert('Signup successful!');
      navigate('/home'); // Navigate to the homepage or dashboard
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
      
      <h2 style={{ color: 'white' }} >Welcome <br></br>Create New Account</h2>
      </div>
      <div className="modal-container">
        {/* <button onClick={onClose} className="modal-close-button">Close</button> */}
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-label">
          <span>
            Email</span>
            <input type="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="form-label">
          <span>
            Password</span>
            <input type="password" value={password} onChange={handlePasswordChange} required />
            </div>
            <div className="form-label">
          <span>
            Confirm Password </span>
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
            </div>
          <label>
          <p><input type="checkbox" checked={agreeTerms} onChange={handleAgreeTermsChange} />
               I accept <a href="/terms">Terms and Conditions</a></p>
          </label>
          <button type="submit" className="submit-button">Register</button>
          <br></br>
          <p>
            Already have an account? <a href="/">Login</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignupModal;
