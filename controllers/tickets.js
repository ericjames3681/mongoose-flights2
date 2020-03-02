const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}

function create(req, res) {
    const ticket = {...req.body, flight: req.params.id};
    Ticket.create(ticket, function() {
        res.redirect(`/flights/${req.params.id}`)
    });
}

function newTicket(req, res) {
    Ticket.find({}, function(err, tickets){
        res.render('tickets/:id', {
            title: "Add Ticket",
            ticket
        })
    })
    res.render('tickets/:id', {flightId: req.params.id});
}