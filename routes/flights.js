var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET /flights/new & ditch the annonymous inline function, replace it with flightsCtrl.new
router.get('/new', flightsCtrl.new);
router.get('/', flightsCtrl.index);
router.get('/:id', flightsCtrl.show);

//POST /movies
router.post('/', flightsCtrl.create);


module.exports = router;
