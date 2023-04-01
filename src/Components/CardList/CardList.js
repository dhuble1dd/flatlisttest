import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View, TouchableHighlight, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import fetchPosts from '../../Redux/Effects/fetchPosts';
import { fetchPostsData } from '../../Utils/api';

import Card from '../Card/Card';

const CardList = () => {
  const data = useSelector(state => state?.posts);
  const page = useSelector(state => state?.page);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPostsData(page))
  }, [page]);
  
//  console.log('data is', data)
  const renderItem = useCallback(({item}) => {
    return <Card title={item?.title} desc={item?.id} />;
  }, []);


  const keyExtractor = useCallback(item => {
    return item?.id ?? `${Math.random()}`;
  }, []);
  
//  const [end, setEnd] = useState(false)
  const onEnd = () =>{
   dispatch({type: 'UPDATE_ON_END', payload: {page}} )
//   setEnd(!end)
  }
console.log('page is', page)

  return (
    <FlatList
      ItemSeparatorComponent={
        <View style={{width: '100%', height: 10, backgroundColor: 'red'}} />
      }
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      data={data}
      onEndReached={onEnd}
      onEndReachedThreshold={1}
    />
  );
};

export default CardList;
