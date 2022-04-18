const express = require('express')
const app = express();

// app.get('/', (req, res) => res.send('Hello World!'))

app.get('/', (req, res) => res.json({ username: 'Samuel' }))

// 404 Not Found
app.all('*', (req, res) => {
            res.status(404).send({message : "This resource was not found"})
    })
    
app.listen(3000, () => console.info('Application running on port 3000'));