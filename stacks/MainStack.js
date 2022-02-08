import { View } from 'react-native';
import React from 'react';

import Title from '../screens/Title';
import Search from '../screens/Search';
import Options from '../screens/Options';
import Houses from '../screens/Houses';

const MainStack = () => {
  return (
    <View>
      <Title />   
      <Search /> 
      <Options />
      <Houses />
    </View>
  );
};

export default MainStack;
