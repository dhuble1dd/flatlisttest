//import { useMemo } from 'react';
//import { StyleSheet } from 'react-native';

//export const useStyles = () => {
//    const styles = useMemo(
//        () =>
//            StyleSheet.create({
//                barcodeTextURL: {
//                    fontSize: 20,
//                    color: 'white',
//                    fontWeight: 'bold',
//                },
//                btn : {
//                    backgroundColor: 'black',
//                    width: 100,
//                },
//                cam: {
//                    height: '50%',
//                    width: '100%',
//                }
//            })
//        , [])
//    return styles;
//}

import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
    const styles = useMemo(
        () => 
        StyleSheet.create({
            centerText: {
                flex: 1,
                fontSize: 18,
                padding: 32,
                color: '#777'
            },
            textBold: {
                fontWeight: '500',
                color: '#000'
            },
            buttonText: {
                fontSize: 21,
                color: 'rgb(0,122,255)'
            },
            buttonTouchable: {
                padding: 16
            }
        })
    , [])
    return styles;
}