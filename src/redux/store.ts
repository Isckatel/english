import {createStore, combineReducers } from "redux";
import lessonsReducer from "./lessons-reducer";

let reducers = combineReducers({
    lessons: lessonsReducer
})

let store = createStore(reducers);

export type StateType = ReturnType<typeof store.getState>;
// export type DispatchType = typeof store.dispatch;

export default store;