const express = require('express');  
const app = express();
  
app.use(express.static('public'));  
  
app.get('/index.html', (req, res) => {  
   res.sendFile( __dirname + "/" + "index.html" );  
})
  
app.get('/process_get', (req, res) => {  
response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})
  
// 404 Not Found
app.all('*', (req, res) => {
            res.status(404).send({message : "This resource was not found"})
    })
    
app.listen(3000, () => console.info('Application running on port 3000'));