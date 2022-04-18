const express = require('express')
const app = express();

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

// Accessing the data
app.post('/form', (req, res) => {
  const name = req.body.name
})

// 404 Not Found
app.all('*', (req, res) => {
            res.status(404).send({message : "This resource was not found"})
    })
    
app.listen(3000, () => console.info('Application running on port 3000'));