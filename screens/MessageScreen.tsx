import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {setMessage} from '../redux/message';
import {fetchUsers} from '../redux/user';

export const MessageScreen = () => {
  const dispatch = useDispatch();
  const {users, loading} = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const {message} = useSelector(state => {
    console.log(state);

    return state.message;
  });

  console.log(users, loading);

  const handlePress = () => {
    dispatch(setMessage('Message from Component'));
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>{message}</Text>
      <Button title={'Set Message'} onPress={handlePress} />
    </View>
  );
};
