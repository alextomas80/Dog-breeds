import { combineReducers } from "redux";
import breedReducer from "./breedReducer";
import errorMessageReducer from "./errorMessage";

const rootReducer = combineReducers({
  errorMessage: errorMessageReducer,
  breeds: breedReducer,
});

export default rootReducer;
