import { createStore, combineReducers } from "redux";
import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  form,
});

const store = createStore(rootReducer);

export default store;