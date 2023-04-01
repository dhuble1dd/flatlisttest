import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {CardScreen} from "../Screens/CardSreen";
import {QRScreen} from "../Screens/QRScreen";
import { Home } from "../Screens/Home";


export const Navigation = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Card List" component={CardScreen} />
            <Stack.Screen name="QRCode-Scaner" component={QRScreen} />
        </Stack.Navigator>
    )

}
