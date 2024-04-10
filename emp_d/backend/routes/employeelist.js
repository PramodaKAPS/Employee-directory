const express = require('express');
const pool = require('../database'); // Adjust the path as necessary to point to your database configuration
const router = express.Router();

// Route to get a list of all employees
router.get('/', (req, res) => {
  const query = 'SELECT * FROM employees'; // Adjust SQL query as needed based on your database schema

  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching employees:', error);
      res.status(500).json({ message: 'Error fetching employees', error: error });
      return;
    }
    res.json(results); // Send the results back to the client
  });
});

module.exports = router;
