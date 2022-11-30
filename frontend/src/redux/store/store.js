import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import UserReducer from "../user/reducers/index.js";
import AuthReducer from "../auth/reducers/index.js";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootSaga from "./rootSaga.js";
import ModeratorReducer from "../admin/moderator/reducers/index.js";
import ProfileReducer from "../profile/reducers/index.js";
import CollaboratorReducer from "../admin/collaborator/reducers/index.js";
import StudentReducer from "../staff/student/reducers/index.js";
import MajorReducer from "../staff/category/major/reducers/index.js";
import SubjectReducer from "../staff/category/subject/reducers/index.js";
import TransactionReducer from "../staff/transaction/reducers/index.js";
import IssueReducer from "../collaborator/issue/reducers/index.js";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  ...AuthReducer,
  ...UserReducer,
  ...ModeratorReducer,
  ...CollaboratorReducer,
  ...MajorReducer,
  ...SubjectReducer,
  ...StudentReducer,
  ...TransactionReducer,
  ...IssueReducer,
  ...ProfileReducer,

});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
