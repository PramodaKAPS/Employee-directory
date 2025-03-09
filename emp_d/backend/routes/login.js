const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../database'); 
const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    console.log("Attempting to log in with", email, password); 

    if (!email || !password) {
        return res.status(400).send('Email and password are required.');
    }

    try {
        const userCheckQuery = 'SELECT * FROM users WHERE email = ?';
        pool.query(userCheckQuery, [email], async (err, results) => {
            if (err) {
                console.error("Database error during user check:", err);
                return res.status(500).send('Database error.');
            }
            if (results.length === 0) {
                console.log("User not found for email:", email);
                return res.status(401).send('User does not exist.');
            }

            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                console.log("Password does not match for user:", email);
                return res.status(401).send('Invalid credentials.');
            }

            console.log("User authenticated successfully:", email);
            res.status(200).json({ message: 'Login successful.' });
        });
    } catch (err) {
        console.error("Server error during login:", err);
        res.status(500).send('Server error.');
    }
});

module.exports = router;

