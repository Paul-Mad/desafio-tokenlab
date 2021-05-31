import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleWare from "redux-thunk";

import { createLogger } from "redux-logger";
import { searchEvents, inputChangeHandler, user } from "./reducers";

//Logger para acompanhar as mudancas do state no redux no console junto com o DevTools do redux
const logger = createLogger();

//combina todos os reducers para serem enviados pela store
const rootReducer = combineReducers({ searchEvents, inputChangeHandler, user });

//exporta a store para o index.tsx ser repassada para todo o App
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunkMiddleWare))
);
