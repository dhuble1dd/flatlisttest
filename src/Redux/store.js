import React from "react";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
//import storage from 'redux-persist/lib/storage'
import reducer from "./reducer";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)