import React from "react";
import { Text, TouchableOpacity, Linking } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import { useStyles } from "./ScanScreen.styles";

export const ScanScreen = () => {
    const styles = useStyles();
    const onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };
    return (<QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
           Put your QR-Code inside the box
          </Text>
        }
      />)
}