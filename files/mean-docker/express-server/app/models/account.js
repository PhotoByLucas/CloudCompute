var mongoose = require('mongoose');

module.exports = mongoose.model('account', {
    clientID: {
        type: String,
        default: ''
    },

    accountID: {
        type: String,
        default: ''
    },

    balance: {
        type: Int,
        default: '0'
    },

});