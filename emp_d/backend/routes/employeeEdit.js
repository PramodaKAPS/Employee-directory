const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pool = require('../database'); 
const router = express.Router();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage: storage });


router.put('/:id', upload.single('photo'), (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, gender, maritalStatus, dob, email, mobile, address, department, position } = req.body;
  let photoFilename = req.file ? req.file.filename : undefined; 

  let query = `
    UPDATE employees
    SET first_name = ?, last_name = ?, gender = ?, marital_status = ?, dob = ?, email = ?, mobile = ?, address = ?, department = ?, position = ?`;
  let values = [first_name, last_name, gender, maritalStatus, dob, email, mobile, address, department, position];

  
  if (photoFilename !== undefined) {
    query += `, photo = ?`;
    values.push(photoFilename);
  }

  
  query += ` WHERE id = ?`;
  values.push(id);

  
  values = values.map(value => value === '' ? null : value); 

  pool.query(query, values, (error, results) => {
    if (error) {
      console.error('Error updating employee:', error);
      return res.status(500).json({ message: 'Database query failed', error });
    }
    res.json({ message: 'Employee updated successfully', affectedRows: results.affectedRows });
  });
});


module.exports = router;
