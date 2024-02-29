const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser'); // Import body-parser middleware
const port = 3036;
const app = express(); // Creating an instance of Express

// Middleware to parse JSON and urlencoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
 

const con = mysql.createConnection({  
    host: 'localhost',
    user: 'root',
    password: 'Onepiece22',
    database: 'warehouse'
});

// Check connection status
con.connect(function(err) {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, this is the dashboard');
});

app.post('/register', (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    // Check if any of the required fields are empty
    if (!email || !name || !password) {
        return res.status(400).send({ message: 'Please fill out all fields' });
    }

    // Proceed with database insertion if all fields are filled out
    con.query('INSERT INTO user (email, name, password) VALUES (?, ?, ?)', [email, name, password], (err, result) => {
        if (err) {
            console.error('Error occurred while registering user:', err);
            return res.status(500).send({ message: 'Error occurred while registering user' });
        } else {
            console.log('User registered successfully');
            return res.status(200).send(result);
        }
    });
});

app.post("/login", (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    con.query("SELECT * FROM user WHERE name = ? AND password = ?", [name, password], 
        (err, result) => {
            if(err){
                console.error('Error occurred while logging in:', err);
                return res.status(500).send({ message: 'Error occurred while logging in' });
            } else {
                if(result.length > 0){
                    res.send(result);
                } else {
                    res.status(401).send({ message: "Wrong email or password" });
                }
            }
        }
    );
});

// Start server
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});