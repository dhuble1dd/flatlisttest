import React, { useEffect, useCallback } from 'react'
import { FlatList, View, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './CodesListScreen.styles';
import { Barcode } from './Barcode';

export const CodesListScreen = () => {
    const styles = useStyles();
    const code = useSelector(state => state?.code.code);
    const codes = useSelector(state => state?.codesList);
    //const dispatch = useDispatch();

    //const renderItem = useCallback((i) => {
    //    console.log('item is' ,i);
    //    const cd = i.item.map((i)=><Barcode body={i}/>,[])
    //    return cd
    //})

    const cd = [];
    codes.map((i) => {
        const { code } = i;
        console.log('ccc', code);
        cd.push(<Barcode body={code} />)
    })

    console.log('cc', cd)

    const renderItem = () => {
        //cd.map((i) => {
        //    //console.log('i ', i);
        //  return  <Barcode body={i} />
        //})
        console.log(111);
        return cd
    }
    //const keyExtractor = `${Math.random()}`;
    const keyExtractor = useCallback(item => {
        return item?.index ?? `${Math.random()}`;
    }, []);

    //const cd = ...codes

    console.log('c', code);
    console.log('cd', codes);


    return (
        <FlatList
            ItemSeparatorComponent={
                <View style={{ width: '100%', height: 10, backgroundColor: 'red' }} />
            }
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            data={cd}
        />

        //<ScrollView style={styles.bg}>
        //    <Text style={styles.tx}>{codes}</Text>
        //</ScrollView>
    )
}