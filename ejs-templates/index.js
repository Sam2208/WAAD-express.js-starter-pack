const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const user = {
    firstName: 'Samuel',
    lastName: 'Mathew',
}

app.get('/', (req, res) => {
    res.render('index', {user: user})
})

// 404 Not Found
app.all('*', (req, res) => {
            res.status(404).send({message : "This resource was not found"})
    })
    
app.listen(3000, () => console.info('Application running on port 3000'));