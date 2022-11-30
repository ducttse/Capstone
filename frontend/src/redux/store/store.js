import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import UserReducer from "../user/reducers/index.js";
import AuthReducer from "../auth/reducers/index.js";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootSaga from "./rootSaga.js";
import ModeratorReducer from "../moderator/reducers/index.js";
import ProfileReducer from "../profile/reducers/index.js";
import walletReducer from "../wallet/reducers/index.js";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	...AuthReducer,
	...UserReducer,
	...ModeratorReducer,
	...ProfileReducer,
	...walletReducer
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
