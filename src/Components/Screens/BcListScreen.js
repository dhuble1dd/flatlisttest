import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CodesListScreen } from "../QRCodeScanner/CodesListScreen";
import { persistor,  } from "../../Redux/store";
import { store } from "./CardSreen";

export const BcListScreen = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <CodesListScreen/>
            </PersistGate>
        </Provider>
    )
}