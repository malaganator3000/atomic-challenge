import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
export const HeaderHeight = 64 + StatusBar.currentHeight;
const Header: FC<NativeStackHeaderProps> = (props) => {
  return (
    <View style={styles.headerContainer}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.contentContainer}>
        <Image source={require('../../assets/logito.png')} style={styles.logo} />
        <View style={styles.divider}></View>
        <View style={styles.companyName}>
          <Text style={styles.atomicText}>atomic</Text>
          <Text style={styles.labsText}>Labs</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: HeaderHeight,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  divider: {
    marginHorizontal: 8,
    height: 40,
    width: 1,
    backgroundColor: 'white',
    opacity:0.5
  },
  companyName: {
    flexDirection: 'row',
  },
  atomicText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '500',
  },
  labsText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Header;
