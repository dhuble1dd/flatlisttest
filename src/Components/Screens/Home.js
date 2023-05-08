import React from "react";
import {useNavigation} from "@react-navigation/native";
import {View, Text, TouchableOpacity} from "react-native"
import { useStyles } from "./Home.styles";

export const Home = () => {
    
    const styles = useStyles();

    const navigation = useNavigation()
    
    const handleNavigate = (screen) => {
        navigation.navigate(screen)
    }

    return(
        <View style={styles.home}>
            {/*<Text style={styles.home}>Home Screen</Text>*/}

            <TouchableOpacity onPress={() => handleNavigate('Card List')}>
                <Text style={styles.card}> CardList </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate('QRCode-Scaner')}>
                <Text style={styles.qr}> QScanner </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate('Barcode-Scaner')}>
                <Text style={styles.bc}> Barcode </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate('Barcode-List')}>
                <Text style={styles.bc}> Bc-list </Text>
            </TouchableOpacity>
        </View>
    )
}