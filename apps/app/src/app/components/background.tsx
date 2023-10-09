import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const Background = (props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const maxX = 50; 
    const maxY = 50; 

    const randomX = Math.floor(Math.random() * maxX) - maxX / 2;
    const randomY = Math.floor(Math.random() * maxY) - maxY / 2;

    setPosition({ x: randomX, y: randomY });
  }, []); 

  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={{
        ...styles.background,
      }}
      imageStyle={{
        transform: [
          { scale: 1.5 },
          { translateY: position.y },
          { translateX: position.x },
        ],
      }}
    >
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    padding:0,
    margin:0,
    position:"relative"
  },
});

export default Background;
