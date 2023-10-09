import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NARANJA } from '../const/color';

const ArrowLeftIcon = () => {
  return <View style={styles.arrow} />;
};

const styles = StyleSheet.create({
  arrow: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderRightWidth: 20,
    borderLeftWidth: 0,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: "white",
  },
});

export default ArrowLeftIcon;
