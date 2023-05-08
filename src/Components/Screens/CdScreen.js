import React from "react";
import { Provider } from "react-redux";
import { store } from "./CardSreen";
import { CodeScreen } from "../QRCodeScanner/CodeScreen";

export const CdScreen = () => {
    return (
        <Provider store={store}>
            <CodeScreen/>
        </Provider>
    )
}