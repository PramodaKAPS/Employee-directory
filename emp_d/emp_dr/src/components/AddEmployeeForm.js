import React, { useState } from 'react';
import  '../App.css';
import CustomButton from './CustomButton';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


function AddEmployeeForm() {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    maritalStatus: '',
    dob: '',
    email: '',
    mobile: '',
    address: '',
    department: '',
    position: '',
    photo: null,
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const [previewImage, setPreviewImage] = useState('');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEmployee({ ...employee, photo: file });

      // Create a preview URL for the uploaded image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const isValidMobileNumber = (mobile) => {
    return /^07\d{8}$/.test(mobile);
  };
  
  

  const handleLoginSubmitButtonClick = (e) => {


    e.preventDefault();

    const allFieldsFilled = Object.values(employee).every(value => {
     
      if (typeof value === 'string') {
        return value.trim() !== '';
      }
      return value !== null; // For the 'photo' field, check it's not null
    });

    const validMobile = isValidMobileNumber(employee.mobile);

    if (!allFieldsFilled) {
      alert("Please fill in all fields.");
      return; // Stop form submission
    } else if (!validMobile) {
      alert("Please enter a valid mobile number that is 10 digits long and starts with '07'.");
      return; // Stop form submission
    }
    if (!isValidMobileNumber(employee.mobile)) {
      alert("Please enter a valid mobile number that is 10 digits long and starts with '07'.");
      return; // Prevent form submission if validation fails
    }
  
    // Create a FormData object to hold the form data
    const formData = new FormData();

    


    formData.append('firstName', employee.firstName);
    formData.append('lastName', employee.lastName);
    formData.append('gender', employee.gender);
    formData.append('maritalStatus', employee.maritalStatus);
    formData.append('dob', employee.dob);
    formData.append('email', employee.email);
    formData.append('mobile', employee.mobile);
    formData.append('address', employee.address);
    formData.append('department', employee.department);
    formData.append('position', employee.position);
    
    // Append file to formData only if a file was uploaded
    if (employee.photo) {
      formData.append('photo', employee.photo);
    }
  
    // Perform the POST request to the backend
    fetch('http://localhost:3002/add-employee', {
      method: 'POST',
      body: formData // Send formData as the POST body
      // Note: When sending FormData, the 'Content-Type' header should not be set manually
     
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      alert('Employee added successfully!');
      navigate('/employeesWadd');
      // Here you might want to clear the form or redirect the user
    })
    .catch((error) => {
      console.error('Error:', error);
      alert(`Error adding employee: ${error.message}`);
    });
    
  };

  return (
    <div className='homepage-background'>
      <div className="navigation-wrapper">
       <Navigation/>
       </div>
    <div className="modal-background">
        <div className="modal-container">
    
      <h2>Add New Employee</h2>
      <form onSubmit={handleLoginSubmitButtonClick} className="add-employee-form">
      <div className="form-group">
        <p >Personal Infirmation</p>

        <div className="form-label">
        <span>Full Name</span><br></br>
        
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          onChange={handleInputChange}
        />
        
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          required
          onChange={handleInputChange}
        />
        </div>
      
      <div className="form-label">
        <div>
        <label>Gender</label>
        <select name="gender" className='gselect-box' onChange={handleInputChange}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        </div>
        <br></br>
        <div>
        <div>
        {previewImage && <img src={previewImage} alt="Profile Preview" className="circular-image" />}
        </div>
        <div>
        <input
          type="file"
          name="photo"
          
          onChange={handlePhotoChange}
        />
      </div>
        
      </div>
      </div>
      <div className="form-label">
        <label>Marital Status</label>
        <select name="maritalStatus" className='mselect-box' onChange={handleInputChange}>
          <option value="">Marital Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>

        <span>Date of Birth</span>
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          className='select-box'
          onChange={handleInputChange}
        />

        
        
      </div>
      <p>Contact Infomation</p>
      <div className="form-label">
        <span>E-mail</span>
      <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          onChange={handleInputChange}
        />
        
        <span>Mobile Number</span>
      <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          required
          onChange={handleInputChange}
        />
        </div>
             
        <br></br>
        <div className="form-label">
        <span>Address</span>
        <input
          type="text"
          name="address"
          placeholder="Street Address"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-label">
      <span>Deparment</span>
        <select name="department" className='dselect-box' onChange={handleInputChange}>
          <option  value="">Department</option>
          <option  value="Software">Software</option>
          <option  value="Finance">Finance</option>
          <option  value="Marketing">Marketing</option>
          <option  value="Other">Other</option>
          {/* Add departments here */}
        </select>

        
        <span>Position</span>
        <input
          type="text"
          name="position"
          placeholder="Position"
          required
          onChange={handleInputChange}
        />
      </div>
      </div>
     
      {/* <button type="submit">Add Employee</button> */}
      <CustomButton
      label="Add Employee "
      onClick={handleLoginSubmitButtonClick}
      className="login-submit"
      
      />
    </form>
    </div>
    </div>
    <div className="footer-wrapper">
    <Footer/>  
    </div>  

    </div>
  );
}

export default AddEmployeeForm;
