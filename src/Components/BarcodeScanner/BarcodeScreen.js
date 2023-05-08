//import React, { useState, useEffect } from "react";
//import { Text, StyleSheet, TouchableOpacity } from 'react-native';
//import { useCameraDevices } from 'react-native-vision-camera';
//import { Camera } from 'react-native-vision-camera';
//import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
//import { useStyles } from "./BarcodeScreen.styles";

//export const BarcodeScreen = () => {
//    const styles = useStyles();
//    const [hasPermission, setHasPermission] = useState(false);
//    const devices = useCameraDevices();
//    const device = devices.back;
//    const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], { checkInverted: false });

//    useEffect(() => {
//        (async () => {
//            const status = await Camera.requestCameraPermission();
//            setHasPermission(status === 'authorized')
//        })
//    }, [])

//    if (device == null && !hasPermission) return (<Text>Camera doesn't found!!!</Text>)

//    return (
//        //device != null && hasPermission && (
//        <>
//            <Camera
//                style={styles.cam}
//                device={device}
//                isActive={true}
//                frameProcessor={frameProcessor}
//                frameProcessorFps={5}
//            />
//                {/*{barcodes.map((barcode, idx) => (
//                    <Text key={idx} style={styles.barcodeTextURL}>
//                        {barcode.displayValue}
//                    </Text>
//                ))}*/}
//        </>
//        //)
//    )
//}


import React from "react";
import { Text, TouchableOpacity, Linking } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import { useStyles } from "./BarcodeScreen.styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export const BarcodeScreen = () => {
    const styles = useStyles();
    const codes = useSelector(state => state.codesList);
    const dispatch = useDispatch();

    const navigation = useNavigation()
    const handleNavigate = (screen) => navigation.navigate(screen)

    const isUrl = (str) => {
        const pattern = new RegExp('^(https?:\\/\\/)?'+ 
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ 
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
        '(\\#[-a-z\\d_]*)?$','i'); 
        return pattern.test(str);
    }

    const onSuccess = e => {
        
        const code = e.data

        if (isUrl(code)) {
            Linking.openURL(e.data).catch(err =>
                console.error('An error occured', err)
            );
        }
        else {
           const cd =  dispatch({ type: 'UPDATE_CODE', payload: { code } })
            dispatch({type: 'FILL_CODESLIST', payload: {code}})
            console.log('code is', code);
            console.log('codesList is', codes);
            handleNavigate('CodeScreen')
        }

    };
    console.log('codesList is', codes);
    return (<QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        reactivate={true}
        reactivateTimeout={1000}
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