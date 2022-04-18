const express = require('express');
const router = express.Router();

/** The success status codes */
    
// 200 Ok
router.get('/', (req, res) => res.status(200).send({message: "The request is successful"}));
// router.get('/update', (req, res) => res.status(200).send(`${__dirname}/html/update.html`));
// router.get('/bad-request', (req, res) => res.status(200).send(`${__dirname}/html/bad-request.html`));
// router.get('/complete', (req, res) => res.status(200).send(`${__dirname}/html/complete.html`));
// router.get('/old-registration', (req, res) => res.status(200).send(`${__dirname}/html/old-register.html`));
// router.get('/old-reg-fail', (req, res) => res.status(200).send(`${__dirname}/html/old-reg-fail.html`));
// router.get('/user/john-new.html', (req, res) => res.status(200).send({message : "This is John's new page"}));
// router.get('/user/jane-new', (req, res) => res.status(200).send({message : "This is Jane's new page"}));
// router.get('/thank-you-page', (req, res) => res.status(200).send({message : "Thank you for registering!"}));
    
// 201 Created
router.post('/create', (req, res) => {
              // logic to save to database
              res.status(201).send({message : 'registrations compelete'})
    });
// router.post('/login', (req, res) => {
//               // logic to login
//               res.status(201).send('You have been logged in')
//     });
// 204 No Content
router.put('/update', (req, res) => {
              // logic to update database record
              res.status(204).end()
    });
	
	
/** Client error status codes */
    
// 400 Bad Request
router.post('/bad-request', (req, res) => {
            res.status(400).send({message : "You are missing vital credentials"})
    });
// 401 Unauthorized
router.get('/user', (req, res) => {
            res.status(401).send({message : "Unauthorized"})
    });
// 403 Forbidden
router.get('/super-secret', (req, res) => {
            res.status(403).send({message : "Forbidden viewing"})
    });
// 405 Method Not Allowed
router.all('/only-put', (req, res) => {
            if(req.method == "PUT") res.status(204).end()
            else res.status(405).send({message : "Please use put"})
    })	


/** Server error status codes */
    
// 500 Internal Server Error
router.post('/500', (req, res) => {
            res.status(500).send({message : "Failed"})
    });
// 501 Unauthorized
router.patch('*', (req, res) => {
            res.status(501).send({message : "No patch"})
    });
// 503 Service Unavailable
router.get('/503', (req, res) => {
            res.status(503).send({message : "Service unavailable"})
    });
// 505 Method Not Allowed
router.all('/http2', (req, res) => {
            if(req.httpVersion == "2.0") res.status(200).send({message : "Responding"})
            else res.status(505).send({message : "http2 only"})
    })
	
module.exports = router;