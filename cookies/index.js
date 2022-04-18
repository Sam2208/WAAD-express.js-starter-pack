const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', (req, res) => {
   res.cookie('name', 'express').send('cookie set'); //Sets name = express
   console.log('Cookies: ', req.cookies);
});

// 404 Not Found
app.all('*', (req, res) => {
            res.status(404).send({message : "This resource was not found"})
    })
    
app.listen(3000, () => console.info('Application running on port 3000'));
