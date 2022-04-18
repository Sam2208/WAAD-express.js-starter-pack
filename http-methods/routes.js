const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => res.status(200).send({message: "GET request is successful"}));

    
// POST
router.post('/post', (req, res) => {
              res.status(200).send({message : 'POST request is successful'})
    });
	
// PUT
router.put('/put', (req, res) => {
	              res.status(200).send({message : 'PUT request is successful'})
	    });
	
// PATCH
router.patch('/patch', (req, res) => {
			              res.status(200).send({message : 'PATCH request is successful'})
			    });
				
// DELETE
router.delete('/delete', (req, res) => {
					      res.status(200).send({message : 'DELETE request is successful'})
					    });
						
						
module.exports = router;	