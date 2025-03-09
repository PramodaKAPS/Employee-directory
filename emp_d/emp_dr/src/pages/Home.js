import React from 'react'
import  '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomCarousel from '../components/CustomCarousel';
import CustomButton from '../components/CustomButton'; 
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { faInfoCircle,faPlusCircle} from '@fortawesome/free-solid-svg-icons';



function Home() {
  const navigate = useNavigate();
  const handleEmpDButtonClick = () => {
    console.log('Employee Details button clicked');
    navigate('/employeesWadd');
  };

  const handleAddEmpButtonClick = () => {
    console.log('Add Employee button clicked');
    navigate('/AddEmployeeForm');
  };





  return (
    
    <div class="site-container">
      <Navigation/>
    <div className='homepage-background'>
    <div >
      <div className='welcome'>
        <h>Welcome LK Domain Registry </h>
      </div>

      <div className='empd'>
        <h>Employee Directory </h>
      </div>

      <div>

      <div>
      <CustomButton 
        label={<><h3>Employee <br></br>Details</h3></>} 
        icon={faInfoCircle}
        onClick={handleEmpDButtonClick}
        className="login-button-class" 
        iconClass="homeicons"
      />
      </div>

      <div>
      <CustomButton
        label={<><h3>Add <br></br>Employee</h3></>} 
        icon={faPlusCircle}
        onClick={handleAddEmpButtonClick}
        className="signup-button-class" 
        iconClass="homeicons"
      />
      

      </div>


      </div>

  <CustomCarousel/>
</div>
</div>

<Footer/>
</div>
  )
}

export default Home;




