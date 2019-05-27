var mongoose = require('mongoose');

module.exports = mongoose.model('record', {
    transitionIDt: {
        type: String,
        default: ''
    },

    accountID: {
        type: String,
        default: ''
    },

    amount: {
        type: int,
        default: '0'
    },

    receiver: {
        type: String,
        default: ''
    }


});