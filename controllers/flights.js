const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
}
function index(req, res) {
  Flight.find({}).sort('-departs').exec(function(err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
  });
}

function show(req, res) {
  Flight.findById(req.params.id).populate('tickets').exec(function(err, flight){
    Ticket.find({flight: flight._id}, function(err, tickets){
      res.render('flights/show', {
        title: 'Flight',
        flight,
        tickets,
        // options: generateOptions(flight.destinations)
      });
    });
  });
}


function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
    if (req.body.departs === '') delete req.body.departs
    const flight = new Flight(req.body);
    flight.save(function(err) {
      if (err) return res.render('flights/new');
      console.log(flight);
      res.redirect(`/flights/${flight._id}`);
    })
}

