import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/counter.saga.js";
import reducer from "../reducers/counter.reducer.js";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
