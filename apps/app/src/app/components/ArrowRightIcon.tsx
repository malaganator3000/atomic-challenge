import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NARANJA } from '../const/color';

const ArrowRightIcon = () => {
  return (
    <View style={styles.arrow} />
  );
};

const styles = StyleSheet.create({
  arrow: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 10,  
    borderBottomWidth: 10,  
    borderLeftWidth: 20,  
    borderRightWidth: 0,
    borderTopColor: 'transparent', 
    borderBottomColor: 'transparent', 
    borderRightColor: 'transparent',  
    borderLeftColor: NARANJA 
  }
});

export default ArrowRightIcon;

