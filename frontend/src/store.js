import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import applicationReducer from './state/reducers/reducer';
import watchAllSagas from './sagas/applicationSaga';

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(
    applicationReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(watchAllSagas);

export default store;