import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
    const styles = useMemo(
        () => 
        StyleSheet.create({
            cd: {
                flex: 1,
                backgroundColor: 'pink',
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