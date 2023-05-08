import React from "react";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from "../../Redux/reducer";
import { Provider } from 'react-redux';
import CardList from "../CardList/CardList";
import { View } from "react-native";

export const  store = createStore(reducer, applyMiddleware(thunk));

export const CardScreen = () => {

    

    return (
        <Provider store={store}>
            <View style={{ height: '100%', backgroundColor: 'blue' }}>
                <CardList />
            </View>
        </Provider>
    )
}
