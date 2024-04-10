import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import  '../App.css';


const EmployeeProfile = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/employeesWadd'); // Use the path that routes to Employee.js
  };

  const handleEditClick = () => {
    navigate(`/edit-employee/${id}`); // Use the path that routes to Employee.js
  };





  useEffect(() => {
    fetch(`http://localhost:3002/employee/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setEmployee(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }
  const photoURL = `http://localhost:3002/uploads/${employee.photo}`;
  // Convert ISO 8601 date string to a more readable format
  const readableDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    
  }).format(new Date(employee.dob)); // Assuming `dob` is the date property





  return (
    <div className='homepage-background'>
    <div className="employee-profile">
      <header className="profile-header">
        <div className="breadcrumbs">
          <a href="/home">Home</a> / <a href="/employeesWadd">Employees</a> / <span>{employee.first_name}</span>
        </div>
        
      </header>
      <div className="profile-card">
        
        <div className="profile-info">
          <h2>{employee.first_name + ' ' + employee.last_name}</h2>
          <div className='nameAndpic'>
          <div className="profile-image-container">
          <img src={photoURL} alt={`${employee.first_name} ${employee.last_name}`} />
        </div>
          <div className="info-section2">
            <h3>Personal Information</h3>
            <p><strong>First Name:</strong> 
            <label>{employee.first_name}</label></p>
            <p><strong>Last Name:</strong> 
            <label>{employee.last_name}</label></p>
            <p><strong>Date of Birth:</strong> {readableDate}</p>
            <p><strong>Marital Status:</strong> {employee.marital_status}</p>
          </div>
          </div>
          <div className="info-section">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Mobile Number:</strong> {employee.mobile}</p>
            <p><strong>Address:</strong> {employee.address}</p>
          </div>
          <div className="info-section">
            <h3>Department and Position</h3>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Position:</strong> {employee.position}</p>
          </div>
          <div className="buttons-container2">
          <button className="action-button edit" onClick={handleEditClick}><FontAwesomeIcon icon={faPencilAlt} /> Edit Details</button>
      
          <button className="action-button back"onClick={handleBackButtonClick} ><FontAwesomeIcon icon={faArrowLeft} /> Employees</button>
          </div> 
        <div> 
         
        </div>

       

        </div>
        
      </div>
      
    </div>
    </div>
  );
};

export default EmployeeProfile;
