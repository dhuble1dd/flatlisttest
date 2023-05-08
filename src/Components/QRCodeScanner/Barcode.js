import React from 'react';
import { View, Text } from 'react-native';
import { useStyles } from './CodesListScreen.styles';

export const Barcode = ({ body }) => {
    const styles = useStyles();
    return (
        <View style={styles.bg}>
            <Text style={styles.tx}>{body}</Text>
        </View>
    )

}