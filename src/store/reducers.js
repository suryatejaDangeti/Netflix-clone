import { combineReducers } from "redux";
import { userReducers } from "./user/user.reducer";

export const rootReducer = combineReducers({
    customer: userReducers,
});