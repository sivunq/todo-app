import { all } from "redux-saga/effects";
import tasksSaga from "./tasksSaga";
import loginSaga from "./loginSaga";

function* watchAllSagas() {
    yield all ([
        tasksSaga(),
        loginSaga(),
    ]);
}

export default watchAllSagas;