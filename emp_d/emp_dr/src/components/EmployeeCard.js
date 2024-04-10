import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function EmployeeCard({ employee, onDelete }) {
  const navigate = useNavigate();
  const iconStyle = { fontSize: '40px', margin: '0 10px' };
  const photoURL = `http://localhost:3002/uploads/${employee.photo}`;

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      fetch(`http://localhost:3002/employee/${id}`, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(() => {
        alert('Employee deleted successfully');
        onDelete(id); // Notify the parent component to refresh the list
        navigate('/employees'); // Redirect to the employees list page
      })
      .catch(error => console.error('Error deleting employee:', error));
    }
  };

  return (
    <div className="employee-card">
      {employee.photo && (
        <img src={photoURL} alt={`${employee.first_name} ${employee.last_name}`} className="employee-photo" />
      )}
      <div className="employee-info">
      <div className="name-and-position">
        <h3 className="employee-name">{employee.first_name + ' ' + employee.last_name}</h3>
        <p className="employee-role">{employee.position}</p>
        </div> 
        <p className="employee-department">{employee.department} Department</p>
        <a href={`mailto:${employee.email}`} className="employee-email">{employee.email}</a>
      </div>
      <div className="employee-actions">
        <Link to={`/employee/${employee.id}`} className="view-btn">
          <FontAwesomeIcon icon={faEllipsis} style={iconStyle} />
        </Link>
        <Link to={`/edit-employee/${employee.id}`} className="edit-btn">
          <FontAwesomeIcon icon={faEdit} style={iconStyle} />
        </Link>
        <Link onClick={() => handleDelete(employee.id)} className="delete-btn" style={iconStyle}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Link>

        

      </div>
    </div>
  );
}

export default EmployeeCard;



//  <button className="bi bi-pen" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
//       <FontAwesomeIcon icon="fas fa-edit" />{/* Ensure you have Bootstrap icons included */}
//         </button>

//         <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
//           <i className="bi bi-three-dots-vertical"></i> {/* Ensure you have Bootstrap icons included */}
//         </button>

//         <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
//           <i className="bi bi-three-dots-vertical"></i> {/* Ensure you have Bootstrap icons included */}
//         </button> 

 {/* <Container>
        <div className="employee-actions">
            <button className="view-btn">
              <FontAwesomeIcon icon={faEye} />
            </button>
            <button className="edit-btn">
              <FontAwesomeIcon icon={faPencilAlt} />
            </button>
            <button className="delete-btn" onClick={() => handleDelete(employee.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          </Container> */}


        //   <a href="#" className="view-btn">
        // <FontAwesomeIcon icon={faTrashAlt} style={iconStyle} />
        // </a>