import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import userReducer from "./UserSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  User: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
