const express = require('express');
const pool = require('../database'); 
const router = express.Router();


router.get('/', (req, res) => {
  const query = 'SELECT * FROM employees'; 

  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching employees:', error);
      res.status(500).json({ message: 'Error fetching employees', error: error });
      return;
    }
    res.json(results); 
  });
});

module.exports = router;
