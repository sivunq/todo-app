let mongoose = require('mongoose');
let loginModel = require("../models/login.model");
let activeUser;

exports.validateLogin = function(req,res){

    console.log(req.body);

    loginModel.findOne({username:req.body.username,password:req.body.password},function(err,response){
        if(!response){
            console.log("user does not exist, creating new user and signing in");
            const newuser = new loginModel({username:req.body.username,password:req.body.password});
            newuser.save(function(err,user){
                if(err) throw err;
                console.log("user added");
            });
            res.send("New user"+newuser.username+"successfully signed up");
        }else{
            res.status(200).json({activeuser:req.body.username});
        }
    });
}

exports.createUser = function(req,res){

    req.params.username ='sindhuri';
    req.params.password = 'sin@123';
    
    const newuser = new loginModel({username:req.params.username,password:req.params.password});
    newuser.save(function(err,user){
        if(err) throw err;
        console.log("user added");
    });
    res.send("New user"+newuser.username+"successfully signed up");

}

exports.logout = function(){
    activeUser = null;
}