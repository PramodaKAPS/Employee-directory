import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import EmployeeList from '../components/EmployeeList';
import  '../App.css';
import CustomButton from '../components/CustomButton';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Employees() {
    const employees = [
        // ... your employees data
      ];

      const navigate = useNavigate();
      const handleAddEmpButtonClick = () => {
        console.log('Emp button clicked');
        navigate('/AddEmployeeForm');
      };

  return (
    
    <div>
        <div className='homepage-background'>
        <div>
        <Navigation/>
        <div className='empdetails'>
        <div className='emphead'>
            <div className='empheadt'>
        <h2>Employees</h2>
        </div>
        <div className="addEmp-button-class" >
        
        
        <CustomButton 
         icon={faPlus} 
        label="Add Employee "
        onClick={handleAddEmpButtonClick}
        className="one" // Custom class for additional styling
      
      />
      

        </div>
        
        </div>
        <EmployeeList employees={employees} />
        </div>

        </div>
        <div>
            <Footer/>
        </div>
        </div>
        </div>
  )
}

export default Employees