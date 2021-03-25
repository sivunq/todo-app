let express = require('express');
let router = express.Router();

let login_controller = require("../controllers/loginController");
let task_controller = require("../controllers/taskController");

router.post('/addtask',task_controller.addTask);
router.post('/updateTask',task_controller.updateTask);
router.get('/get/:username',task_controller.getAllTasks);
router.get('/deleteTask',task_controller.deleteTask);

router.post('/login',login_controller.validateLogin);
router.get('/signup',login_controller.createUser);

module.exports = router;