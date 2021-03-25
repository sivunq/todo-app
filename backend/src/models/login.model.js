const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let loginSchema = new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true}
},{collection:"Users"});

const loginModel = mongoose.model('Users',loginSchema);
module.exports = loginModel;