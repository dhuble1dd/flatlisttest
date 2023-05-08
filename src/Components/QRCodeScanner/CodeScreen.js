import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { useStyles } from './CodeScreen.style';

export const CodeScreen = () => {
    const styles = useStyles()
    const code = useSelector(state => state?.code.code);
    const codes = useSelector(state => state?.codesList);
    

    return (
        <View style={styles.cd}>
            <Text style={styles.tx}>{code}</Text>
        </View>

    )
}