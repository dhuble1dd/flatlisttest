import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
    const styles = useMemo(
        () => 
        StyleSheet.create({
            home: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                //alignItems: 'center',
                
                marginLeft: 0,
                width: '100%'
            },
            card: {
                //paddingTop: '100%',
                //height: '100%',
                //width: '100%',
                backgroundColor: '#ADD8E6',
                color: 'red',
                fontSize: 24,
                borderRadius: 25,
            },
            qr: {
                //paddingTop: '100%',
                //height: '100%',
                //width: '100%',
                color: '#ADD8E6',
                backgroundColor: 'red',
                fontSize: 24,
                borderRadius: 25,
            }
        })
    , [])
    return styles;
}