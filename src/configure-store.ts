
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import rootSaga  from "./container/main/redux/saga"
import { rootReducer } from "./container/main/redux/reducer"


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);