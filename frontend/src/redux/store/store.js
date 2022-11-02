import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import UserReducer from "../user/reducers/index.js";
import AuthReducer from "../auth/reducers/index.js";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootSaga from "./rootSaga.js";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	...AuthReducer,
	...UserReducer
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
