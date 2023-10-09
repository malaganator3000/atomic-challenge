import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Animated,
} from 'react-native';
import ArrowLeftIcon from './ArrowLeftIcon';
export const HeaderHeight = 64 + StatusBar.currentHeight;
const Header: FC<NativeStackHeaderProps> = ({ navigation }) => {
  const canReturn = navigation.canGoBack();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <Animated.View
      style={{
        ...styles.headerContainer,
      }}
    >
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.contentContainer}>
        {canReturn && (
          <TouchableOpacity style={styles.canReturn} onPress={goBack}>
            <ArrowLeftIcon />
          </TouchableOpacity>
        )}

        <Image
          source={require('../../assets/logito.png')}
          style={styles.logo}
        />
        <View style={styles.divider}></View>
        <View style={styles.companyName}>
          <Text style={styles.atomicText}>atomic</Text>
          <Text style={styles.labsText}>Labs</Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: HeaderHeight,
    backgroundColor: 'transparent',
    // marginVertical: 5,
  },
  canReturn: {
    position: 'absolute',
    left: 0,
    top: StatusBar.currentHeight,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  contentContainer: {
    // height: 64,
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    // backgroundColor: 'blue',
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
    opacity: 0.5,
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
