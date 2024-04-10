const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pool = require('../database'); // Ensure this path correctly leads to your database configuration
const router = express.Router();

// Setup Multer for file uploads
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append the date to the original filename
  }
});

const upload = multer({ storage: storage });

// Endpoint to update an employee's details
router.put('/:id', upload.single('photo'), (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, gender, maritalStatus, dob, email, mobile, address, department, position } = req.body;
  let photoFilename = req.file ? req.file.filename : undefined; // Use undefined to signify no new photo

  // Initialize the query and values array with everything except the photo
  let query = `
    UPDATE employees
    SET first_name = ?, last_name = ?, gender = ?, marital_status = ?, dob = ?, email = ?, mobile = ?, address = ?, department = ?, position = ?`;
  let values = [first_name, last_name, gender, maritalStatus, dob, email, mobile, address, department, position];

  // If a new photo was uploaded, append it to the query and values
  if (photoFilename !== undefined) {
    query += `, photo = ?`;
    values.push(photoFilename);
  }

  // Finish preparing the query and values
  query += ` WHERE id = ?`;
  values.push(id);

  // Convert empty dob string to null
  values = values.map(value => value === '' ? null : value); // General handling for empty strings to null

  pool.query(query, values, (error, results) => {
    if (error) {
      console.error('Error updating employee:', error);
      return res.status(500).json({ message: 'Database query failed', error });
    }
    res.json({ message: 'Employee updated successfully', affectedRows: results.affectedRows });
  });
});


module.exports = router;
