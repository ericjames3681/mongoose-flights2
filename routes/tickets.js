const router = require('express').Router();

const ticketsCtrl = require('../controllers/tickets');

router.get('/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;