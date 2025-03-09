const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../database'); 
const router = express.Router();


const passwordValidationRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

router.post('/', async (req, res) => {
    const { email, password, confirmPassword } = req.body;

   
    if (!email || !password || password !== confirmPassword) {
        return res.status(400).send('Invalid input. Please ensure all fields are filled and passwords match.');
    }

   
    if (!passwordValidationRegex.test(password)) {
        return res.status(400).send('Password must be at least 8 characters long and include at least one symbol.');
    }

    try {
        const userCheckQuery = 'SELECT * FROM users WHERE email = ?';
        pool.query(userCheckQuery, [email], async (err, results) => {
            if (err) {
                return res.status(500).send('Database error during user check.');
            }
            if (results.length > 0) {
                return res.status(400).send('User already exists.');
            }

            
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const insertQuery = 'INSERT INTO users (email, password) VALUES (?, ?)';
            pool.query(insertQuery, [email, hashedPassword], (err, results) => {
                if (err) {
                    return res.status(500).send('Database error during user creation.');
                }
                res.status(201).send('User created successfully.');
            });
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
