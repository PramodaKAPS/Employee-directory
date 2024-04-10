// routes/employeeProfile.js
const express = require('express');
const router = express.Router();
const pool = require('../database'); // Ensure this path is correct

// Fetch an employee by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM employees WHERE id = ?';
    
    pool.query(query, [id], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Database query failed', error });
        }
        
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    });
});

// // Update an employee's details
// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const { first_name, last_name, dob, marital_status, email, mobile, address, department, position } = req.body;
//     const query = `
//       UPDATE employees 
//       SET first_name = ?, last_name = ?, dob = ?, marital_status = ?, email = ?, mobile = ?, address = ?, department = ?, position = ?
//       WHERE id = ?`;
  
//     pool.query(query, [first_name, last_name, dob, marital_status, email, mobile, address, department, position, id], (error, results) => {
//       if (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Error updating employee', error });
//       }
//       res.json({ message: 'Employee updated successfully', affectedRows: results.affectedRows });
//     });
//   });
  







module.exports = router;
