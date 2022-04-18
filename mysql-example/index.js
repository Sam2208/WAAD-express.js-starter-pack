const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

// Create table
app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE IF NOT EXISTS OrderDetails(id int AUTO_INCREMENT, Name VARCHAR(255), Mobile INT(10), Email VARCHAR(255), Menu VARCHAR(255), Extra VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('table created...');
    });
});

// Insert data
app.post('/insert', (req, res) => {
    console.log(req.body);
    let form = req.body;
    let sql = `INSERT INTO OrderDetails(Name, Mobile, Email, Menu, Extra) VALUES ('${form.name}', '${form.mobile}', '${form.email}', '${form.dropdown}', '${form.order}')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post added...');
    });
});



// use the modules
app.use(cors())
app.use(bodyParser.json());

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

// 404 Not Found
app.all('*', (req, res) => {
            res.status(404).send({message : "This resource was not found"})
    })
    
app.listen(3000, () => console.info('Application running on port 3000'));