import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import  '../App.css';


function EmployeeDetails({ employee }) {
  // You would typically fetch the employee data from state or props
  // For now, we will use static data as an example

  return (
    <div className="employee-details-container">
      <div className="breadcrumbs">
        <a href="/home">Home</a> / <a href="/employees">Employees</a> / <span>{employee.name}</span>
      </div>

      <h1>{employee.name}</h1>

      <div className="employee-details-card">
        <div className="employee-image-section">
          <img src={employee.imageUrl} alt={`${employee.name}`} className="employee-image" />
        </div>

        <div className="employee-information">
          <section className="personal-info-section">
            <h2>Personal Information</h2>
            <p><strong>Full Name:</strong> {employee.fullName}</p>
            <p><strong>Date of Birth:</strong> {employee.dateOfBirth}</p>
            <p><strong>Marital Status:</strong> {employee.maritalStatus}</p>
          </section>

          <section className="contact-info-section">
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Mobile Number:</strong> {employee.mobileNumber}</p>
            <p><strong>Address:</strong> {employee.address}</p>
          </section>

          <section className="department-info-section">
            <h2>Department and Position</h2>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Position:</strong> {employee.position}</p>
          </section>

          <div className="employee-actions">
            <button className="edit-button">
              <FontAwesomeIcon icon={faPencilAlt} /> Edit Details
            </button>
            <button className="back-button">
              <FontAwesomeIcon icon={faArrowLeft} /> Employees
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
