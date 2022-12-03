import * as React from 'react';
import {
    TouchableOpacity
  } from 'react-native';

const Img = ({ item, onPress }) => {
    const { title, desc } = item;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    container: {
      padding: 8,
      borderRadius: 10,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      color: colors.LIGHT,
    },
  });