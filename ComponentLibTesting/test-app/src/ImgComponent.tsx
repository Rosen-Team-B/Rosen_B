import * as React from 'react';

import{Image,TouchableOpacity} from 'react-native'

const Img = ({ item, onPress }) => {
    const { title, desc } = item;
    return (
      <TouchableOpacity onPress={onPress} >
        <Image source={require('ComponentLibTesting\test-app\src\assets\test-img.jpg')}/>
      </TouchableOpacity>
    );
  };
