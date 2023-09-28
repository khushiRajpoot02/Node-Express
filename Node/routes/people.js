const express = require('express');
const router = express.Router();
const {sendPeople, sendPeople1, updatePeople, deletepeople, getPeople} = require('../controllers/people')
router.get('/', getPeople)
router.post('/', sendPeople)
router.post('/postman', sendPeople1)
// put method (updating the data)
  router.put('/postman/:id', updatePeople)
// delete method
router.delete('/postman/:id', deletepeople)


module.exports = router
