// index.js


// const express = require('express')
// const bodyParser = require('body-parser');
// const loginRoute = require('./routes/login');
// const signupRoute = require('./routes/signup');// require the signup route
// const addEmployeeRoute = require('./routes/addemployee');
// const employeeListRoute = require('./routes/employeelist');
// const employeeProfileRoute = require('./routes/employeeProfile');
// const employeeDetailsEditRoutes = require('./routes/employeeDetailsEdit');
// const deleteRouter = require('./routes/delete');


// const cors = require('cors');


// const app = express();
// const port = process.env.PORT || 3002;
// app.use(cors());
// // Middleware
// app.use(bodyParser.json());
// app.use(express.json()); 

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.use('/login', loginRoute);
// app.use('/signup', signupRoute); 


// app.use('/add-employee', addEmployeeRoute);
// app.use('/employees', employeeListRoute);
// app.use('/employee', employeeProfileRoute);

// app.use('/uploads', express.static('uploads'));
// app.use('/employees', employeeDetailsEditRoutes);
// app.use('/', deleteRouter); 

// app.listen(port, () => console.log(`Server running on port ${port}`));


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const loginRoute = require('./routes/login'); // Adjust the path as necessary
const signupRoute = require('./routes/signup');
const employeeListRoute = require('./routes/employeelist');
const addEmployeeRoute = require('./routes/addemployee');
const deleteRouter = require('./routes/delete');
const employeeProfileRoute = require('./routes/employeeProfile');
const employeeEditRoute = require('./routes/employeeEdit'); 

// Import other routes...

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.use('/login', loginRoute);
app.use('/signup', signupRoute); 
app.use('/employees', employeeListRoute);
app.use('/add-employee', addEmployeeRoute);
app.use('/', deleteRouter); 
app.use('/employee', employeeProfileRoute);

app.use('/employee', employeeEditRoute);


app.listen(port, () => console.log(`Server running on port ${port}`));
