
const express = require('express');
const router = express.Router();
const pool = require('../database'); 


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









module.exports = router;
