import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {CardScreen} from "../Screens/CardSreen";
import {QRScreen} from "../Screens/QRScreen";
import { Home } from "../Screens/Home";
import { BCScreen } from "../Screens/BCScreen";
import { CdScreen } from "../Screens/CdScreen";
import { BcListScreen } from "../Screens/BcListScreen";
import { LngScreen } from "../Screens/LngScreen";


export const Navigation = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Card List" component={CardScreen} />
            <Stack.Screen name="QRCode-Scaner" component={QRScreen} />
            <Stack.Screen name="Barcode-Scaner" component={BCScreen} />
            <Stack.Screen name="CodeScreen" component={CdScreen} />
            <Stack.Screen name="Barcode-List" component={BcListScreen} />
            <Stack.Screen name="Lng" component={LngScreen} />
        </Stack.Navigator>
    )

}
