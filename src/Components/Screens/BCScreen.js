import React from "react";
import { useNavigate } from "@react-navigation/native"
import { BarcodeScreen } from "../BarcodeScanner/BarcodeScreen";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistor} from "../../Redux/store";
import { store } from "./CardSreen";

export const BCScreen = () => {

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BarcodeScreen />
            </PersistGate>
        </Provider>

    )
}

