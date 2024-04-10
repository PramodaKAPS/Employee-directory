import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const EmployeeDetailsEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null); // Initial state set to null
  const [previewImage, setPreviewImage] = useState('');
  const handleBackButtonClick = () => {
    navigate('/employeesWadd'); // Use the path that routes to Employee.js
  };


  useEffect(() => {
    fetch(`http://localhost:3002/employee/${id}`)
      .then(response => response.json())
      .then(data => {
        setEmployee({
          ...data,
          dob: data.dob ? data.dob.split('T')[0] : '', // Pre-format dob
          photo: '', // Don't try to set file objects or paths here
        });
        console.log(data);
        setPreviewImage(data.photo ? `http://localhost:3002/uploads/${data.photo}` : '');
      })
      .catch(error => console.error('Error:', error));
  }, [id]);

  // Return early while employee is null (data hasn't loaded yet)
  if (!employee) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prevState => ({ ...prevState, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEmployee(prevState => ({ ...prevState, photo: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(employee).forEach(([key, value]) => {
      if (key === 'photo' && value instanceof File) {
        formData.append(key, value);
      } else if (key !== 'photo') {
        formData.append(key, value);
      }
    });

    fetch(`http://localhost:3002/employee/${id}`, {
      method: 'PUT',
      body: formData,
    })
      .then(response => response.json())
      .then(() => {
        alert('Employee updated successfully');
        navigate('/employeesWadd'); // Or wherever you wish to redirect
      })
      .catch(error => console.error('Error updating employee:', error));
  };

  return (
    <div className='homepage-background'>
      
    <div className="employee-profile">


      <header className="profile-header">
        <div className="breadcrumbs">
          <a href="/home">Home</a> / <a href="/employeesWadd">Employees</a> / <span>{employee.first_name}</span>
        </div>
        </header>
      
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="profile-card">
        <div className="profile-info">
        <h2>{employee.first_name + ' ' + employee.last_name}</h2>
        <div className='nameAndpic'>
             {/* Photo Upload */}
          <div className="profile-image-container">
            <label>Profile Picture:</label>
            <input type="file" name="photo" onChange={handlePhotoChange} />
            {previewImage && <img src={previewImage} alt="Profile Preview" className="profile-preview" style={{maxWidth: '100px', maxHeight: '100px', marginTop: '10px'}} />}
          </div>

          <div className="info-section2">
  <h3>Personal Information</h3>
  <div className="form-row">
    <label>First Name:</label>
    <input type="text" name="first_name" value={employee.first_name} onChange={handleInputChange} />
  </div>
  
  <div className="form-row">
    <label>Last Name:</label>
    <input type="text" name="last_name" value={employee.last_name} onChange={handleInputChange} />
  </div>

  <div className="form-row">
    <label>Gender:</label>
    <select name="gender" value={employee.gender} onChange={handleInputChange}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  </div>

  <div className="form-row">
    <label>Date of Birth:</label>
    <input type="date" name="dob" value={employee.dob} onChange={handleInputChange} />
  </div>

  <div className="form-row">
    <label>Marital Status:</label>
    <select name="maritalStatus" value={employee.maritalStatus} onChange={handleInputChange}>
      <option value="Single">Single</option>
      <option value="Married">Married</option>
      <option value="Divorced">Divorced</option>
      <option value="Widowed">Widowed</option>
    </select>
  </div>
</div>
          </div>
          


          

        {/* Contact Information */}
        <div className="info-section">
  <h3>Contact Information</h3>
  <div className="form-row">
    <label>Email:</label>
    <input type="email" name="email" value={employee.email} onChange={handleInputChange} />
  </div>
  
  <div className="form-row">
    <label>Mobile Number:</label>
    <input type="text" name="mobile" value={employee.mobile} onChange={handleInputChange} />
  </div>

  <div className="form-row">
    <label>Address:</label>
    <input type="text" name="address" value={employee.address} onChange={handleInputChange} />
  </div>
</div>

          
          {/* Department and Position */}
          <div className="info-section">
  <h3>Department and Position</h3>
  <div className="form-row">
    <label>Department:</label>
    <select name="department" value={employee.department} onChange={handleInputChange}>
      <option value="Software">Software</option>
      <option value="Finance">Finance</option>
      <option value="Human Resources">Human Resources</option>
      <option value="Marketing">Marketing</option>
      <option value="Sales">Sales</option>
      <option value="Other">Other</option>
    </select>
  </div>

  <div className="form-row">
    <label>Position:</label>
    <input type="text" name="position" value={employee.position} onChange={handleInputChange} />
  </div>
</div>


         
          
          {/* Submit Button */}
          <div className="buttons-container2">
            <button className="action-button edit" type="submit" >
              <FontAwesomeIcon icon={faSave} /> Save Changes
            </button>
            <button className="action-button back"onClick={handleBackButtonClick} ><FontAwesomeIcon icon={faArrowLeft} /> Employees</button>
          </div>
          </div>
          </div>
      </form>
      
    </div>
    </div>
   
  );
};

export default EmployeeDetailsEdit;







