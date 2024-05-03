const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({

    name : {
        type : String,
        required : true
    },
   
    email : {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const user = mongoose.model("Admin",adminSchema);

module.exports = user;