import React, { useState } from 'react';

function EmployeeSearch() {
  const [employees, setEmployees] = useState([]); // Assuming this will be fetched or passed in
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('name'); // or 'department'

  // Assume we have a function to fetch employees
  // useEffect(() => {
  //   fetchEmployees().then(data => setEmployees(data));
  // }, []);

  // Search handler
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Criteria change handler
  const handleCriteriaChange = (e) => {
    setSearchCriteria(e.target.value);
  };

  // Filtered employees based on search
  const filteredEmployees = employees.filter((employee) => {
    if (searchCriteria === 'name') {
      return employee.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchCriteria === 'department') {
      return employee.department.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Criteria selection */}
      <select value={searchCriteria} onChange={handleCriteriaChange}>
        <option value="name">Name</option>
        <option value="department">Department</option>
      </select>

      {/* Employee list */}
      <div>
        {filteredEmployees.map((employee) => (
          <div key={employee.id}>
            {employee.name} - {employee.department}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeSearch;
