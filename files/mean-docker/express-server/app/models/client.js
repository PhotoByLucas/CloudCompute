var mongoose = require('mongoose');

module.exports = mongoose.model('Client',{
    clientID:{
        type:Number,
        default:''
    },

    name:{
        type:String,
        default:''
    },

    birthdate:{
        type:String,
        default:'2019-05-29'
    },

    address:{
        type:String,
        default:''
    },

    occupation:{
        type:String,
        default:''
    },

    password:{
        type:String,
        default:'000000'
    }

});