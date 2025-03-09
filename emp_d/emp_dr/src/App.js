import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Employees from './pages/Employees';
import EmployeePage from './pages/EmployeeProfile';
import AddEmployeeForm from './components/AddEmployeeForm';
import EmployeeDetailsEdit from './pages/EmployeeDetailsEdit';
import EmployeeProfile from './pages/EmployeeProfile';
import EmployeeList from './components/EmployeeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './pages/AboutUs';
import TermsAndCon from './pages/TermsAndCon';


function App() {


  
  return (
  
  <div>
    
    <Router>
    <Routes>
     
      <Route path="/" element={<LoginModal/>} />
      <Route path="/signup" element={<SignupModal />} />
       <Route path="/home" element={<Home />} />
       <Route path="/employees" element={<EmployeeList />} />
       <Route path="/employeesWadd" element={<Employees />} />
       <Route path="/AddEmployeeForm" element={<AddEmployeeForm />} />
      <Route path="/employee/:id" element={<EmployeeProfile />} />
      <Route path="/edit-employee/:id" element={<EmployeeDetailsEdit />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/terms" element={<TermsAndCon />} />


    </Routes>
  </Router>
  

  </div>

  );
}

export default App;
