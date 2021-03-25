var mongoose = require('mongoose');
var taskModel = require("../models/task.model");

exports.addTask = function(req,res){

    // req.params.username ="sindhu";
    // req.params.taskid=2;
    // req.params.taskdescription="task 2";
    // req.params.isDone =false;

    console.log(req.body);
    
    let taskid=10;
    taskModel.count({username:req.body.username}).then((count) => {
        const taskobj = new taskModel({username:req.body.username,task:{taskid:taskid+count,
            taskdescription:req.body.taskdescription,isDone:req.body.isDone}});
        taskobj.save(function(err,task){
            console.log("inside save");
            if(err) {
                console.log("ERRORRRRRR");
                throw err;
            }
            console.log("Task "+task.username+","+task.task.taskdescription+" is added");
        })
        res.send("Task "+taskobj.task.taskid+" is added");
    });
};

exports.getAllTasks = function(req,res){

    taskModel.find({username:req.params.username,"task.isDone":false})
    .then((response)=>res.send(response));
};

exports.deleteTask = function(req,res){

    req.params.username="sind";
    req.params.taskid = 1;

    taskModel.deleteOne({username:req.params.username},{"task.taskid":req.params.taskid})
    .then(res.send("deleted"));
}

exports.updateTask = function(req,res){

    console.log(req.body);

    taskModel.update(
        {username:req.body.username,"task.taskid":req.body.taskid},
        {$set:{"task.isDone":true}})
    .then(res.send("updated"));
}