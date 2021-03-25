import { combineReducers } from "redux";

export default combineReducers({
    userinfo: (state={}, action) => {
        switch(action.type) {
            case "SET_USER":
                return action.userinfo;
            case "SIGN_OUT":
                return {};
            case "INIT_VIEW":
                return state;
            default:
                return state;
        }
    },
    tasks: (state={}, action) => {
        switch(action.type) {
            case "SET_TASKS":
                return action.tasks;
            case "INIT_VIEW":
                return state;
            default:
                return state;
        }
    }
});