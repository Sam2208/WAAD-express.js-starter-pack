const express = require('express')
const bodyParser = require('body-parser')
const app = express();
  
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('id: ' + req.query.id);
});

// 404 Not Found
app.all('*', (req, res) => {
            res.status(404).send({message : "This resource was not found"})
    })
    
app.listen(3000, () => console.info('Application running on port 3000'));