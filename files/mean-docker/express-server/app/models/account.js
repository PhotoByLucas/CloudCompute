var mongoose = require('mongoose');

module.exports = mongoose.model('Account', {
    clientID: {
        type:String,
        default: ''
    },

    accountID: {
        type:String,
        default: ''
    },

    balance: {
        type:Number,
        default: '0'
    },

    flag:{
        type:Boolean,
        default:'false'
    }
});