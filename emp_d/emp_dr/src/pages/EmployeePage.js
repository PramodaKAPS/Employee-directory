import React from 'react';
import EmployeeProfile from './EmployeeProfile';

const EmployeePage = () => {
  // This data would typically come from state, props, or an API call.
  const employeeData = {
    name: 'Jakey Fernando',
    fullName: 'Jakey Fernando',
    dob: '12/03/1992',
    maritalStatus: 'Single',
    email: 'JakeyF@gmail.com',
    mobile: '+94772345678',
    address: 'NO.23, Molepe road, Katubedda, Moratuwa',
    department: 'Software Engineering Department',
    position: 'Software Engineer'
  };

  // Event handlers can be defined here
  const handleEditClick = () => {
    console.log('Edit button clicked');
    // Logic for handling edit click
  };

  const handleBackClick = () => {
    console.log('Back to employees list');
    // Logic for going back to the employees list
  };

  return (
    <div>
      <EmployeeProfile 
        employeeData={employeeData} 
        onEditClick={handleEditClick}
        onBackClick={handleBackClick}
      />
    </div>
  );
};

export default EmployeePage;
