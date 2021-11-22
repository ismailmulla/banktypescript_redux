import{combineReducers}from "redux";
import bankreducer from"./bankReducer";


const reducers=combineReducers({
bank:bankreducer
});

export default reducers;

export type state= ReturnType<typeof reducers>