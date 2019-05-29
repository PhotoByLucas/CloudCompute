var mongoose = require('mongoose');

module.exports = mongoose.model('Client',{
    clientID:{
        type:String,
        default:''
    },

    name:{
        type:String,
        default:''
    },

    birthdate:{
        type:String,
        default:'0000/00/00'
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