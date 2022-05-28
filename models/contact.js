const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    phone_number:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    }

},{ timestamps:true})

const Contact = mongoose.model('Contact',contactSchema);

module.exports = Contact ;