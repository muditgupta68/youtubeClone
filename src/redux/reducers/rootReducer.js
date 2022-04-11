import { combineReducers } from "redux";
import userReducer from "./userReducer";
import videoReducer from "./videoReducer";

const RootReducer = combineReducers({
  userReducer: userReducer,
  videoReducer: videoReducer,
});

export default RootReducer;
