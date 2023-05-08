import React from "react";
import { Text, TouchableOpacity, Linking } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import { useStyles } from "./ScanScreen.styles";
import { useDispatch, useSelector } from "react-redux";

export const ScanScreen = () => {
    const styles = useStyles();
    //const code = useSelector(state => state.code);
    const dispatch = useDispatch();
    const onSuccess = e => {
        //Linking.openURL(e.data).catch(err =>
        //console.error('An error occured', err)
        //);
        code = e.data
        dispatch({type: 'UPDATE_CODE', payload: {code}})
        console.log('code is', code);
    };
    return (<QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        topContent={
          <Text style={styles.centerText}>
           Put your QR-Code inside the box
          </Text>
        
        }
        bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
      />)
}