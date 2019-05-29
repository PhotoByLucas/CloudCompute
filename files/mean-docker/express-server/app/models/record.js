var mongoose = require('mongoose');

module.exports = mongoose.model('Record', {
    transitionID: {
        type:String,
        default: ''
    },

    accountID: {
        type:String,
        default: ''
    },

    amount: {
        type:Number,
        default: '0'
    },

    receiver: {
        type:String,
        default: ''
    }


});