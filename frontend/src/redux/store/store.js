import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import userSaga from "../user/sagas/index.js";
import UserReducer from "../user/reducers/index.js";
import AuthReducer from "../auth/reducers/index.js";
import { composeWithDevTools } from "@redux-devtools/extension";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	...AuthReducer,
	...UserReducer
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(userSaga);

export default store;
