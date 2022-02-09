import { View } from 'react-native';
import React from 'react';

import Title from './Title';
import Search from './Search';
import Options from './Options';
import Houses from './Houses';

const Main = () => {
  return (
    <View>
      <Title />   
      <Search /> 
      <Options />
      <Houses />
    </View>
  );
};

export default Main;