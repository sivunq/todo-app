import { all, call, put, select, takeLatest } from "redux-saga/effects";
import * as FetchHandler from '../api/FetchHandler';

export default function* tasksSaga() {
    yield all ([
        takeLatest("INIT_VIEW", initTasks),
        takeLatest("COMPLETE_TASK", completeTask),
        takeLatest("ADD_TASK", addTask),
    ]);
}

export function* initTasks(action) {
    try{
        const appState = yield select();
        const tasksServerResponse = yield call(getTasks,action.userinfo.username);
        let tasks = {};
        tasksServerResponse.forEach(element => {
            tasks[element.task.taskid] = element;
        });
        yield put(setTasks(tasks));
    } catch (error) {
        console.error("Failed Server Call", error);
    }
}

export function* completeTask(action) {
    const {taskId, userinfo} = action;
    try {
        const compTaskServerResponse = yield call(compTask, taskId, userinfo);
        yield* initTasks(action);
    } catch (error) {
        console.error("Failed Server Call", error);
    }
}

export function* addTask(action) {
    const {taskDesc, userinfo} = action;
    try {
        const addTaskServerResponse = yield call(callAddTask, taskDesc, userinfo);
        yield* initTasks(action);
    } catch (error) {
        console.error("Failed Server Call");
    }
}

const compTask = (taskId,userinfo) => {
    return FetchHandler.post("/updateTask", 
    {
        username: userinfo.username,
        taskid: taskId
    });
}

const callAddTask = (taskDesc, userinfo) => {
    return FetchHandler.post("/addtask", 
    {
        username: userinfo.username, 
        taskdescription: taskDesc,
        isDone: false
    });
}

const getTasks = (username) => {
    return FetchHandler.get("/get/"+username);
}

function setTasks(tasksServerResponse) {
    return {
        type: "SET_TASKS",
        tasks: tasksServerResponse
    };
}