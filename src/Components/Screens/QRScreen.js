import React from "react";
import { ScanScreen } from "../QRCodeScanner/ScanScreen";
import { useNavigate } from "@react-navigation/native"
import { Provider } from "react-redux";
import { store } from "./CardSreen";

export const QRScreen = () => {

    return (
        <Provider store={store}>
            <ScanScreen />
        </Provider>

    )
}

