import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('name'); // or 'department'

  useEffect(() => {
    fetch('http://localhost:3002/employees')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSearchCriteriaChange = (e) => {
    setSearchCriteria(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    if (searchCriteria === 'name') {
      // Adjust based on your employee object properties
      return `${employee.first_name} ${employee.last_name}`.toLowerCase().includes(searchTerm);
    } else { // 'department'
      // Adjust based on your employee object properties
      return employee.department.toLowerCase().includes(searchTerm);
    }
  });

  return (
    <div className='parent-container '>
      <div className="search-container">
        <input
          type="text"
          className="input-field2" 
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchTermChange}
          
        />
        <select className="input-field2"  value={searchCriteria} onChange={handleSearchCriteriaChange}>
          <option value="name">Name</option>
          <option value="department">Department</option>
        </select>
      </div>
      <div className="employee-list">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))
        ) : (
          <p className="no-results-message">{searchCriteria === 'department' ? 'No department found.' : 'No employees found.'}</p>
        )}
      </div>
    </div>
  );
}

export default EmployeeList;
