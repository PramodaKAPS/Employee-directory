// routes/addemployee.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pool = require('../database'); // Ensure this path correctly leads to your database configuration
const router = express.Router();

// Setup the directory for uploads
const uploadDir = path.join(__dirname, '..', 'uploads');

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Generate a unique filename
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('photo'), (req, res) => {
  const { firstName, lastName, gender, maritalStatus, dob, email, mobile, address, department, position } = req.body;
  // Using the filename instead of the path to store in the database
  let photoFilename = req.file ? req.file.filename : null;


  const query = `
    INSERT INTO employees 
    (first_name, last_name, gender, marital_status, dob, email, mobile, address, department, position, photo) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [firstName, lastName, gender, maritalStatus, dob, email, mobile, address, department, position, photoFilename];

  pool.query(query, values, (error, results) => {
    if (error) {
      console.error(error);
      // Attempt to remove the uploaded file if database insertion fails
      if (photoFilename) {
        fs.unlinkSync(path.join(uploadDir, photoFilename));
      }
      return res.status(500).json({ message: 'Database query failed', error: error });
    }
    res.status(201).json({ message: 'Employee added successfully', employeeId: results.insertId });
  });
});

module.exports = router;
