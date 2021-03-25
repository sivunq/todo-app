const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    username:{type:String,required:true},
    task:{taskid:{type:Number,required:true},
            taskdescription:{type:String,required:true},
            isDone:{type:Boolean,required:true}}
},{collection:'Tasks'});

const taskModel = mongoose.model('Tasks',taskSchema);
module.exports = taskModel;