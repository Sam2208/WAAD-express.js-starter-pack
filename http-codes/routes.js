const express = require('express');
const router = express.Router();

/** The success status codes */
    
// 200 Ok
router.get('/', (req, res) => res.status(200).send({message: "The request is successful"}));

    
// 201 Created
router.post('/create', (req, res) => {
              res.status(201).send({message : 'Created'})
    });

// 204 No Content
router.put('/update', (req, res) => {
              res.status(204).end()
    });
	
	
/** Client error status codes */
    
// 400 Bad Request
router.post('/bad-request', (req, res) => {
            res.status(400).send({message : "A bad request"})
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