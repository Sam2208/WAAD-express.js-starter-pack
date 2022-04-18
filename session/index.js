const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(cookieParser());

app.use(session({secret: "Secret!!!!"}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("Welcome back! You have dropped by this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});

// 404 Not Found
app.all('*', (req, res) => {
            res.status(404).send({message : "This resource was not found"})
    })
    
app.listen(3000, () => console.info('Application running on port 3000'));