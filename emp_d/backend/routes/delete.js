// delete.js
const express = require('express');
const router = express.Router();
const pool = require('../database'); 

router.delete('/employee/:id', (req, res) => {
    const { id } = req.params;
    
    const sql = 'DELETE FROM employees WHERE id = ?';
    pool.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Error deleting employee:', err);
            return res.status(500).json({ message: 'Error deleting employee' });
        }
        
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Employee not found' });
        } else {
            res.status(200).json({ message: 'Employee deleted successfully' });
        }
    });
});

module.exports = router;
