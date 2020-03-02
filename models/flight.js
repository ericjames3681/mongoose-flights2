const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        required: true,
        max: 9999,
        min: 10
    },
    departs: {
        type: Date,
        default: function() {
            const date = new Date();
            const year = date.getFullYear() + 1;
            date.setFullYear(year);
            return date;
        }
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    destinations: [destinationSchema],
    tickets: [{
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
    }]
}, {
    timestamps: true
});


module.exports = mongoose.model(
    'Flight',
    flightSchema
)