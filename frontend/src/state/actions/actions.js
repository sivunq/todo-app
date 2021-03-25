export const initView = () => ({
    type: "INIT_VIEW"
});

export const completeTask = (taskId, userinfo) => ({
    type: "COMPLETE_TASK",
    taskId,
    userinfo
});

export const addTask = (taskDesc, userinfo) => ({
    type: "ADD_TASK",
    taskDesc,
    userinfo
});

export const validateLogin = (userinfo) => ({
    type: "VALIDATE_LOGIN",
    userinfo
})

export const signout = () => ({
    type: "SIGN_OUT",
    userinfo: {}
})