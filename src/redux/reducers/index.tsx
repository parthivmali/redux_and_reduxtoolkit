import { combineReducers } from "redux";
import TaskReducer from "./TaskReducer";

const RootReducer = combineReducers({
    tasks: TaskReducer,
    
    
})

export default RootReducer