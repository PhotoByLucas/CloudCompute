var mongoose = require('mongoose');

module.exports = mongoose.model('Account', {
    clientID: {
        type:String,
        default: ''
    },

    accountID: {
        type:String,
        default: '1'
    },

    balance: {
        type:Number,
        default: '0'
    },

    clientName:{
        type: String,
       default:''
    },
    flag:{
        type:Boolean,
        default:'false'
    }
});