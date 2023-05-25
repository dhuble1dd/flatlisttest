import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
    const styles = useMemo(
        () => 
        StyleSheet.create({
            sw: {
                width: '100%',
                height: '5%'
            },
            main: {
                height: '95%',
                alignItems: 'center',
                justifyContent: 'center'
            },
            text: {
                fontSize: 24,
                textAlign: 'center',
                color: '#000'
            }
        })
    , [])
    return styles;
}