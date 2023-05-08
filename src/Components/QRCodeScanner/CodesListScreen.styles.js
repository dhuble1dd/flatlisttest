import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
    const styles = useMemo(
        () => 
        StyleSheet.create({
            bg: {
                flex: 1,
                backgroundColor: 'pink',
                //width: '100%',
                //height: 10
            },
            tx: {
                justifyContent: 'center',
                alignItems: 'center',
                color: 'yellow',
                fontSize: 24,
            }
        })
    , [])
    return styles;
}